import { GetStaticProps } from 'next'
import Head from 'next/head'
import invariant from 'tiny-invariant'
import { PostLayout } from '../../components/posts'
import { getAllPostSlugs, getPostBySlug } from '../../utils/post'
import { Post } from '../../utils/types'

const Post = (props: { postData: Post }) => {
  const {
    postData: { content, meta },
  } = props

  const name = encodeURIComponent('RICK BOOTH')
  const title = encodeURIComponent(meta.title)

  return (
    <>
      <Head>
        <title>{meta.title} - RICK BOOTH</title>
        <meta
          property="og:image"
          content={`api/og-image?name=${name}&stage=${title}`}
        />
      </Head>
      <PostLayout publishedOn={meta.publishedOn} title={meta.title}>
        {content}
      </PostLayout>
    </>
  )
}

export default Post

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  invariant(typeof params?.slug === 'string')
  const postData = await getPostBySlug(params.slug)

  return {
    props: {
      postData,
    },
  }
}
