// Utility to handle asset paths with base URL for GitHub Pages
const base = import.meta.env.BASE_URL;

/**
 * Converts an absolute path to include the base URL
 * e.g., "/assets/images/logo.png" -> "/sjs-rebuild/assets/images/logo.png"
 */
export function assetPath(path: string): string {
  if (!path) return path;
  // Remove leading slash if present, then prepend base
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}

/**
 * Converts a page href to include the base URL
 * e.g., "/about" -> "/sjs-rebuild/about"
 */
export function pagePath(href: string): string {
  if (!href) return href;
  // External links - return as-is
  if (href.startsWith('http') || href.startsWith('mailto:')) return href;
  // Anchor links on current page
  if (href.startsWith('#')) return href;
  // Remove leading slash if present, then prepend base
  const cleanPath = href.startsWith('/') ? href.slice(1) : href;
  // Handle root path
  if (cleanPath === '') return base;
  return `${base}${cleanPath}`;
}
