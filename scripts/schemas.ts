import { z } from 'zod'

export const RelatedSchema = z.object({
  url: z.string(),
  title: z.string(),
  publishedAt: z.string(),
})

export const ProjectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  tech: z.array(z.string()),
  type: z.array(z.string()),
  link: z.string().optional(),
  image: z.string(),
  repo: z.string().optional(),
  video: z.string().optional(),
  images: z.array(z.string()).optional(),
  achievements: z.array(z.string()),
  story: z.array(z.string()),
  related: z.array(RelatedSchema).optional(),
})

export const TechStackItemSchema = z.object({
  name: z.string(),
  slug: z.string(),
  tag: z.string(),
  image: z.string(),
  description: z.string(),
  link: z.string(),
  since: z.string(),
  intro: z.array(z.string()),
  experience: z.array(z.string()),
  featuredOrder: z.number().optional(),
})

export type ProjectData = z.infer<typeof ProjectSchema>
export type TechStackItemData = z.infer<typeof TechStackItemSchema>
