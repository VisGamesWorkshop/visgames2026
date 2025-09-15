// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    draft: z.boolean(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  schema: ({ image }) => z.object({
    draft: z.boolean(),
    name: z.string(),
    affiliation: z.string(),
    role: z.string(),
    avatar: z.object({
      src: z.union([image(), z.string().url()]),
      alt: z.string(),
    }),
    description: z.string(),
    homepage: z.string(),
    linkedin: z.string().optional(),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
};