import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { DateTime } from 'luxon'

const getPosts = (limit?: number) => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), 'pages', 'posts'), {
    withFileTypes: true,
  })

  const posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'pages', 'posts', file.name),
        'utf-8'
      )
      const { data, content } = matter(fileContent)

      const slug = file.name.replace(/.mdx$/, '')
      const publishedOn = DateTime.fromJSDate(data.publishedOn).toISO()
      return { data: { ...data, publishedOn }, content, slug }
    })
    .filter((post) => post)

  if (limit) {
    return posts.filter((_post, index) => {
      return index + 1 <= limit
    })
  }

  return posts
}

export default getPosts
