import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Intro } from '../components/intro'
import { Projects } from '../components/projects'
import { getPosts } from '../utils/post'
import { RecentPosts } from '../components/posts'
import { Work } from '../components/work'
import Head from 'next/head'
import { useConfig } from '../components/config'

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { baseTitle, baseDescription, baseOgImageUrl } = useConfig()

  return (
    <>
      <Head>
        <meta property="og:title" content={baseTitle} />
        <meta property="og:description" content={baseDescription} />
        <meta property="og:image" content={baseOgImageUrl} />
      </Head>
      <Intro />
      <Projects />
      <Work />
      <RecentPosts posts={posts} />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = () => {
  const posts = getPosts(3)

  return { props: { posts } }
}
