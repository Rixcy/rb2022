import { z } from 'zod'

export const postSchema = z.object({
  slug: z.string(),
  content: z.string(),
  meta: z.object({
    title: z.string(),
    publishedOn: z.string(),
  }),
  excerpt: z.string(),
})

export type Post = z.infer<typeof postSchema>

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never
