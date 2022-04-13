import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Intro } from '../components/intro'
import { Projects } from '../components/projects'
import { getPosts } from '../utils/post'
import { RecentPosts } from '../components/posts'
import { Work } from '../components/work'

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
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
