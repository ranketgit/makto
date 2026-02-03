import { defineCollection, z } from 'astro:content';

const news = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
        author: z.string().default('Équipe Makto'),
        category: z.string().default('Actualités')
	}),
});

export const collections = { news };