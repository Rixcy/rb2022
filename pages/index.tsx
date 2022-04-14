import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Intro } from '../components/intro'
import { Projects } from '../components/projects'
import { getPosts } from '../utils/post'
import { RecentPosts } from '../components/posts'
import { Work } from '../components/work'
import Head from 'next/head'

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Rick Booth - Frontend Developer" />
        <meta
          property="og:image"
          content="https://rb2022.vercel.app/api/og-image?title=RICK BOOTH - FRONTEND DEVELOPER"
        />
        <meta
          property="og:description"
          content="Rick Booth is Senior Frontend Developer based in Newcastle. Working at Progression on Design Systems and building out the front end for an app specialising in building career frameworks."
        />
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
