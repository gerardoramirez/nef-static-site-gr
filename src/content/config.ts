import { defineCollection, z } from 'astro:content';

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

export const collections = {
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
};
