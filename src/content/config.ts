import { defineCollection, z } from 'astro:content';

// Work/Case Studies
const workSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date().optional(),
  role: z.string().optional(),
  impact: z.array(z.string()).optional(),
  tags: z.array(z.string()).default([]),
  client: z.string().optional(),
  status: z.enum(['shipped', 'in-progress', 'archived']).optional(),
  image: z.string().optional(),
  draft: z.boolean().default(false),
});

// Products
const productsSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  tagline: z.string().optional(),
  url: z.string().optional(),
  status: z.enum(['active', 'maintenance', 'archived']).optional(),
  tags: z.array(z.string()).default([]),
  date_launched: z.date().optional(),
  image: z.string().optional(),
  draft: z.boolean().default(false),
});

// Writing/Articles
const writingSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  author: z.string().default('Gerardo Ramirez'),
  date: z.date().optional(),
  tags: z.array(z.string()).default([]),
  type: z.enum(['essay', 'tutorial', 'analysis', 'research']).optional(),
  draft: z.boolean().default(false),
});

// Speaking
const speakingSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date().optional(),
  conference: z.string().optional(),
  status: z.enum(['upcoming', 'past', 'proposed']).optional(),
  tags: z.array(z.string()).default([]),
  video_url: z.string().optional(),
  slides_url: z.string().optional(),
  draft: z.boolean().default(false),
});

// Legacy collections (kept for backward compatibility during migration)
const securitySchema = z.object({
  title: z.string(),
  order: z.number().optional(),
});

const aiEngineeringSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
});

const softwareEngineeringSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
});

const enterpriseSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  order: z.number().optional(),
});

export const collections = {
  // New collections
  work: defineCollection({
    type: 'content',
    schema: workSchema,
  }),
  products: defineCollection({
    type: 'content',
    schema: productsSchema,
  }),
  writing: defineCollection({
    type: 'content',
    schema: writingSchema,
  }),
  speaking: defineCollection({
    type: 'content',
    schema: speakingSchema,
  }),
  
  // Legacy collections (to be deprecated)
  security: defineCollection({
    type: 'content',
    schema: securitySchema,
  }),
  'ai-engineering': defineCollection({
    type: 'content',
    schema: aiEngineeringSchema,
  }),
  'software-engineering': defineCollection({
    type: 'content',
    schema: softwareEngineeringSchema,
  }),
  enterprise: defineCollection({
    type: 'content',
    schema: enterpriseSchema,
  }),
  'neat-things': defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.date().optional(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      sourceUrl: z.string().optional(),
      sourceLabel: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
  }),
};
