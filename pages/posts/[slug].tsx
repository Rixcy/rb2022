import { GetStaticProps } from 'next'
import Head from 'next/head'
import invariant from 'tiny-invariant'
import { useConfig } from '../../components/config'
import { PostLayout } from '../../components/posts'
import { getAllPostSlugs, getPostBySlug } from '../../utils/post'
import { Post as TPost } from '../../utils/types'

const Post = (props: { postData: TPost }) => {
  const {
    postData: { content, meta, excerpt, slug },
  } = props

  const { uppercaseName } = useConfig()

  return (
    <>
      <Head>
        <title>
          {meta.title} - {uppercaseName}
        </title>
        <meta property="og:title" content={meta.title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`/${slug}.png`} />
        {excerpt && <meta property="og:description" content={excerpt} />}
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
