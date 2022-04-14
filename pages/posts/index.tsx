import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { getPosts } from '../../utils/post'
import { PostsList } from '../../components/posts'
import Head from 'next/head'
import { useConfig } from '../../components/config'

const PostListPage: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { name, uppercaseName, baseDescription } = useConfig()
  return (
    <>
      <Head>
        <title>POSTS - {uppercaseName}</title>
        <meta property="og:title" content={`${name} - Posts`} />
        <meta property="og:description" content={baseDescription} />
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
