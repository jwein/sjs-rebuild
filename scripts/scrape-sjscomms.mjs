import scrape from 'website-scraper';
import path from 'node:path';
import fs from 'node:fs/promises';
import { URL } from 'node:url';

/**
 * SJS Communications website mirroring script
 *
 * Purpose:
 * - Recursively download publicly accessible HTML, CSS, JS, images, fonts and other assets
 * - Keep folder structure using bySiteStructure so we can reuse assets locally
 * - Restrict crawling to the target hostname
 *
 * Usage:
 *   BASE_URL=https://www.sjscomms.com OUTPUT_DIR=docs/sjscomms_scrape node scripts/scrape-sjscomms.mjs
 *
 * Env vars (optional):
 * - BASE_URL:   Starting URL (default: https://www.sjscomms.com/)
 * - OUTPUT_DIR: Output directory relative to repo root (default: docs/sjscomms_scrape)
 * - MAX_DEPTH:  Max recursion depth; null means no explicit limit (default: unset)
 * - CONCURRENCY: Number of parallel requests (default: 8)
 */
async function main() {
	const baseUrl = process.env.BASE_URL?.trim() || 'https://www.sjscomms.com/';
	const outputDirRelative = process.env.OUTPUT_DIR?.trim() || 'docs/sjscomms_scrape';
	const maxDepth =
		process.env.MAX_DEPTH !== undefined && process.env.MAX_DEPTH !== ''
			? Number(process.env.MAX_DEPTH)
			: undefined;
	const requestConcurrency =
		process.env.CONCURRENCY !== undefined && process.env.CONCURRENCY !== ''
			? Number(process.env.CONCURRENCY)
			: 8;

	const outputDir = path.resolve(process.cwd(), outputDirRelative);
	const { hostname: allowedHostname } = new URL(baseUrl);
	const additionalHostsFromEnv = (process.env.ALLOWED_HOSTNAMES || '')
		.split(',')
		.map((h) => h.trim())
		.filter(Boolean);
	const defaultExtraHosts = [
		'images.squarespace-cdn.com',
		'static1.squarespace.com',
		'static.squarespace.com',
		'fonts.googleapis.com',
		'fonts.gstatic.com'
	];
	const allowedHostnamesSet = new Set([allowedHostname, ...defaultExtraHosts, ...additionalHostsFromEnv]);

	// Clean existing output directory if requested (website-scraper errors if directory exists)
	const cleanOutput = (process.env.CLEAN_OUTPUT ?? 'true').toLowerCase() !== 'false';
	if (cleanOutput) {
		await fs.rm(outputDir, { recursive: true, force: true });
	}

	console.log('Starting site scrape with settings:');
	console.log(`- BASE_URL:        ${baseUrl}`);
	console.log(`- OUTPUT_DIR:      ${outputDir}`);
	console.log(`- MAX_DEPTH:       ${maxDepth ?? '(default)'}`);
	console.log(`- CONCURRENCY:     ${requestConcurrency}`);
	console.log(`- ALLOWED HOSTS:   ${Array.from(allowedHostnamesSet).join(', ')}`);
	console.log(`- CLEAN_OUTPUT:    ${cleanOutput}`);

	const urlFilter = (rawUrl) => {
		try {
			const parsed = new URL(rawUrl, baseUrl);
			// Restrict to allowed hostnames and http(s) protocol only
			if (!['http:', 'https:'].includes(parsed.protocol)) return false;
			if (!allowedHostnamesSet.has(parsed.hostname)) return false;
			// Skip typical non-content endpoints
			const pathname = parsed.pathname || '';
			if (
				pathname.startsWith('/search') ||
				pathname.startsWith('/api') ||
				pathname.startsWith('/signin') ||
				pathname.startsWith('/login')
			) {
				return false;
			}
			return true;
		} catch {
			return false;
		}
	};

	const start = Date.now();
	try {
		await scrape({
			urls: [
				{
					url: baseUrl,
					urlFilter
				}
			],
			directory: outputDir,
			recursive: true,
			// Set a max depth if provided; undefined uses library default behavior
			maxDepth,
			filenameGenerator: 'byType',
			subdirectories: [
				{ directory: 'img', extensions: ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp', '.ico'] },
				{ directory: 'css', extensions: ['.css'] },
				{ directory: 'js', extensions: ['.js'] },
				{ directory: 'fonts', extensions: ['.woff', '.woff2', '.ttf', '.otf', '.eot'] },
				{ directory: 'media', extensions: ['.mp4', '.webm', '.mp3', '.wav', '.ogg'] }
			],
			requestConcurrency,
			// Common resource selectors; library includes defaults, but being explicit helps coverage
			sources: [
				{ selector: 'img', attr: 'src' },
				{ selector: 'img[srcset]', attr: 'srcset' },
				{ selector: 'link[rel="stylesheet"]', attr: 'href' },
				{ selector: 'link[rel="preload"][as="style"]', attr: 'href' },
				{ selector: 'link[rel="preload"][as="font"]', attr: 'href' },
				{ selector: 'script', attr: 'src' },
				{ selector: 'source', attr: 'src' },
				{ selector: 'source[srcset]', attr: 'srcset' },
				{ selector: 'video', attr: 'src' },
				{ selector: 'audio', attr: 'src' },
				{ selector: 'a', attr: 'href' }
			],
			request: {
				headers: {
					// Use a realistic UA to avoid blocked requests by some CDNs
					'user-agent':
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
				}
			},
			prettifyUrls: false
		});
	} catch (err) {
		console.error('Scrape failed:', err?.message || err);
		process.exitCode = 1;
		return;
	}

	const elapsedSec = ((Date.now() - start) / 1000).toFixed(1);
	console.log(`Scrape completed in ${elapsedSec}s`);
	console.log(`Saved to: ${outputDir}`);
}

main();


