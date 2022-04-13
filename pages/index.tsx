import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Footer } from '../components/footer'
import { Nav } from '../components/nav'
import { Intro } from '../components/intro'
import { Projects } from '../components/projects'
import * as globalStyles from '../styles/global.css'
import { getPosts } from '../utils/post'
import { RecentPosts } from '../components/posts'
import { Work } from '../components/work'

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={globalStyles.container}>
      <Nav />
      <div className={globalStyles.content}>
        <Intro />
        <Projects />
        <Work />
        <RecentPosts posts={posts} />
      </div>
      <Footer />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = () => {
  const posts = getPosts(3)

  return { props: { posts } }
}
