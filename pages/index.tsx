import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Footer } from '../components/footer'
import { Nav } from '../components/nav'
import { Intro } from '../components/intro'
import { Projects } from '../components/projects'
import * as globalStyles from '../styles/global.css'
import { getPosts } from '../utils/post'
import { RecentPosts } from '../components/posts'

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={globalStyles.container}>
      <Nav />
      <div className={globalStyles.content}>
        <Intro />
        <Projects />
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
