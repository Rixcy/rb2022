import * as s from './recent-posts.css'
import { Posts } from '../../utils/post'
import { Date } from '../date'
import { Section } from '../section'
import Link from 'next/link'

type PostsProps = {
  posts: Posts
}

export const RecentPosts = (props: PostsProps) => {
  return (
    <Section.Root>
      <Section.Title>Recent Posts</Section.Title>
      <div className={s.recentPosts}>
        {props.posts.map((post, index) => (
          <article className={s.post} key={index}>
            <Link href={`/posts/${post.slug}`} passHref>
              <a className={s.link}>{post.title}</a>
            </Link>
            <Date className={s.date} date={post.publishedOn} />
          </article>
        ))}
      </div>
    </Section.Root>
  )
}
