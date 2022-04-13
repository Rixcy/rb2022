import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { getPosts } from '../../utils/post'
import { PostsList } from '../../components/posts'

const PostListPage: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <PostsList posts={posts} />
}

export default PostListPage

export const getStaticProps: GetStaticProps = () => {
  const posts = getPosts()

  return { props: { posts } }
}
