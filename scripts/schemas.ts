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
  role: z.string().optional(),
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
  experienceCompany: z.string().optional(),
  aliases: z.array(z.string()).optional(),
  order: z.number(),
  year: z.number(),
})

export const TechStackItemSchema = z.object({
  name: z.string(),
  slug: z.string(),
  tag: z.string(),
  image: z.string(),
  description: z.string(),
  link: z.string(),
  since: z.string(),
  experience: z.array(z.string()),
  featuredOrder: z.number().optional(),
  aliases: z.array(z.string()).optional(),
})

export const ExperienceSchema = z.object({
  company: z.string(),
  title: z.string(),
  location: z.enum(['Remote', 'Hybrid', 'On-site']),
  type: z.enum(['Full-time', 'Part-time', 'Contract']),
  duration: z.string(),
  description: z.string(),
  achievements: z.array(z.string()),
  techStack: z.array(z.string()),
  order: z.number(),
})

export const CvSkillSchema = z.object({
  label: z.string(),
  keywords: z.string(),
})

export const CvFeaturedSchema = z.object({
  company: z.string(),
  description: z.string().optional(),
  achievements: z.array(z.string()).optional(),
})

export const CvMetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.array(z.string()).optional(),
  openGraph: z.object({
    title: z.string(),
    description: z.string(),
  }),
})

export const CvVariantSchema = z.object({
  key: z.enum(['full', 'ai', 'web3', 'fullstack']),
  professionalTitle: z.string(),
  summary: z.string(),
  highlights: z.array(z.string()),
  skills: z.array(CvSkillSchema),
  featured: z.array(CvFeaturedSchema).optional(),
  also: z.string().optional(),
  metadata: CvMetadataSchema,
})

export type ProjectData = z.infer<typeof ProjectSchema>
export type TechStackItemData = z.infer<typeof TechStackItemSchema>
export type ExperienceData = z.infer<typeof ExperienceSchema>
export type CvVariantData = z.infer<typeof CvVariantSchema>
