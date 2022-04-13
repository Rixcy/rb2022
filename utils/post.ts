import matter from 'gray-matter'
import { join } from 'path'
import fs from 'fs'
import { DateTime } from 'luxon'
import { Post, postSchema } from './types'
import { remark } from 'remark'
import html from 'remark-html'
import { z } from 'zod'

const getSlugFromFileName = (fileName: string): string => {
  return fileName.replace(/\.mdx$/, '')
}

const postsDirectory = join(process.cwd(), 'posts')

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const publishedOn = DateTime.fromJSDate(data.publishedOn).toISO()

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  const postData = {
    slug: realSlug,
    meta: { ...data, publishedOn },
    content: contentHtml,
  }
  return postSchema.parse(postData)
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: getSlugFromFileName(fileName),
      },
    }
  })
}

export type PostSlugs = ReturnType<typeof getAllPostSlugs>

export function getPosts(limit?: number): {
  title: string
  publishedOn: string
  slug: string
}[] {
  const postFiles = fs.readdirSync(postsDirectory)
  const schema = z.object({
    title: z.string(),
    publishedOn: z.string(),
    slug: z.string(),
  })

  const sortedPosts = postFiles
    .map((fileName) => {
      const fullPath = join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      const publishedOn = DateTime.fromJSDate(data.publishedOn).toISO()
      const postData = {
        title: data.title,
        slug: getSlugFromFileName(fileName),
        publishedOn,
      }

      return schema.parse(postData)
    })
    .sort((a, b) => {
      return DateTime.fromISO(a.publishedOn).toMillis() <
        DateTime.fromISO(b.publishedOn).toMillis()
        ? 1
        : -1
    })

  if (limit) {
    return sortedPosts.slice(0, limit)
  }

  return sortedPosts
}

export type Posts = ReturnType<typeof getPosts>
