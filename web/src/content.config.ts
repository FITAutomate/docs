import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        category: z
          .enum(['fit-intro', 'getting-started', 'writing', 'publishing', 'help'])
          .optional(),
        audience: z.array(z.enum(['user', 'editor', 'operator'])).optional(),
        status: z.enum(['current', 'deprecated', 'research']).default('current'),
      }),
    }),
  }),
};
