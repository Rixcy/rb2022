import * as s from './posts-list.css'
import { Posts } from '../../utils/post'
import { Date } from '../date'

export const PostsList = ({ posts }: { posts: Posts }) => {
  return (
    <main>
      <h1 className="sr-only">Posts</h1>
      <div className={s.posts}>
        {posts.map((post, index) => (
          <article key={index}>
            <a className={s.title} href={`/posts/${post.slug}`}>
              {post.title}
            </a>
            <Date className={s.date} date={post.publishedOn} />
          </article>
        ))}
      </div>
    </main>
  )
}
