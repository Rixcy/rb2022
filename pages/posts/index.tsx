import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Footer } from '../../components/footer'
import { Nav } from '../../components/nav'
import * as globalStyles from '../../styles/global.css'
import { getPosts } from '../../utils/post'
import { PostsList } from '../../components/posts'

const PostListPage: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={globalStyles.container}>
      <Nav />
      <div className={globalStyles.content}>
        <PostsList posts={posts} />
      </div>
      <Footer />
    </div>
  )
}

export default PostListPage

export const getStaticProps: GetStaticProps = () => {
  const posts = getPosts()

  return { props: { posts } }
}
