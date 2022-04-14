import * as s from './posts-list.css'
import { Posts } from '../../utils/post'
import { Date } from '../date'
import Link from 'next/link'

export const PostsList = ({ posts }: { posts: Posts }) => {
  return (
    <main className={s.postsList}>
      <h1 className="sr-only">Posts</h1>
      <div className={s.posts}>
        {posts.map((post, index) => (
          <article key={index}>
            <Link href={`/posts/${post.slug}`} passHref>
              <a className={s.title}>{post.title}</a>
            </Link>
            <Date className={s.date} date={post.publishedOn} />
          </article>
        ))}
      </div>
    </main>
  )
}
