import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
	type: 'content',
	schema: z
		.object({
			title: z.string(),
			slug: z.string(),
			published: z.boolean(),
			date: z.date(),
			excerpt: z.string(),
			heroImage: z.string().optional(),
			tags: z.array(z.string()).optional(),
		})
		.passthrough(), // allow additional fields like client, services, etc.
});

export const collections = {
	'case-studies': caseStudies,
};


