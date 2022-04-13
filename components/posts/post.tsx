import * as s from './post.css'
import Link from 'next/link'
import { Date } from '../date'

type PostLayoutProps = {
  title: string
  publishedOn: string
  children: string
}

export const PostLayout = (props: PostLayoutProps) => {
  const { children, publishedOn, title } = props

  return (
    <>
      <div className={s.header}>
        <div className={s.titleWrapper}>
          <div className={s.desktopContent}>
            <Link href="/posts" passHref>
              <a className={s.allPostsLink}>All Posts</a>
            </Link>
            <span aria-hidden className={s.breadcrumbSeparator}>
              /
            </span>
          </div>
          <h2 className={s.title}>{title}</h2>
        </div>
        <Date className={s.date} date={publishedOn} />
      </div>
      <hr className={s.separator} />
      <div dangerouslySetInnerHTML={{ __html: children }} />
    </>
  )
}
