import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { getPosts } from '../../utils/post'
import { PostsList } from '../../components/posts'
import Head from 'next/head'

const PostListPage: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>POSTS - RICK BOOTH</title>
        <meta property="og:title" content="Posts" />
        <meta
          property="og:image"
          content="https://rb2022.vercel.app/api/og-image?title=POSTS"
        />
      </Head>
      <PostsList posts={posts} />
    </>
  )
}

export default PostListPage

export const getStaticProps: GetStaticProps = () => {
  const posts = getPosts()

  return { props: { posts } }
}
