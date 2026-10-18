import { z } from "zod";

export const RelatedSchema = z.object({
  publishedAt: z.string(),
  title: z.string(),
  url: z.string(),
});

export const ProjectSchema = z.object({
  achievements: z.array(z.string()),
  aliases: z.array(z.string()).optional(),
  description: z.string(),
  experienceCompany: z.string().optional(),
  image: z.string(),
  images: z.array(z.string()).optional(),
  link: z.string().optional(),
  order: z.number(),
  related: z.array(RelatedSchema).optional(),
  repo: z.string().optional(),
  role: z.string().optional(),
  slug: z.string(),
  story: z.array(z.string()),
  tech: z.array(z.string()),
  title: z.string(),
  type: z.array(z.string()),
  video: z.string().optional(),
  year: z.number(),
});

export const TechStackItemSchema = z.object({
  aliases: z.array(z.string()).optional(),
  description: z.string(),
  experience: z.array(z.string()),
  featuredOrder: z.number().optional(),
  image: z.string(),
  link: z.string(),
  name: z.string(),
  since: z.string(),
  slug: z.string(),
  tag: z.string(),
});

export const ExperienceSchema = z.object({
  achievements: z.array(z.string()),
  company: z.string(),
  description: z.string(),
  duration: z.string(),
  location: z.enum(["Remote", "Hybrid", "On-site"]),
  order: z.number(),
  techStack: z.array(z.string()),
  title: z.string(),
  type: z.enum(["Full-time", "Part-time", "Contract"]),
});

export const CvSkillSchema = z.object({
  keywords: z.string(),
  label: z.string(),
});

export const CvFeaturedSchema = z.object({
  achievements: z.array(z.string()).optional(),
  company: z.string(),
  description: z.string().optional(),
});

export const CvMetadataSchema = z.object({
  description: z.string(),
  keywords: z.array(z.string()).optional(),
  openGraph: z.object({
    title: z.string(),
    description: z.string(),
  }),
  title: z.string(),
});

export const CvVariantSchema = z.object({
  also: z.string().optional(),
  featured: z.array(CvFeaturedSchema).optional(),
  highlights: z.array(z.string()),
  key: z.enum(["full", "ai", "web3", "fullstack"]),
  metadata: CvMetadataSchema,
  professionalTitle: z.string(),
  skills: z.array(CvSkillSchema),
  summary: z.string(),
});

export type ProjectData = z.infer<typeof ProjectSchema>;
export type TechStackItemData = z.infer<typeof TechStackItemSchema>;
export type ExperienceData = z.infer<typeof ExperienceSchema>;
export type CvVariantData = z.infer<typeof CvVariantSchema>;
