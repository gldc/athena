import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const briefs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './briefs' }),
  schema: z.object({
    title: z.string().optional(),
    summary: z.string().optional(),
    date: z.coerce.date().optional()
  })
});

export const collections = { briefs };
