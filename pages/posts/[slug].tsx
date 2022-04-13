import { GetStaticProps } from 'next'
import invariant from 'tiny-invariant'
import { PostLayout } from '../../components/posts'
import { getAllPostSlugs, getPostBySlug } from '../../utils/post'
import { Post } from '../../utils/types'

const Post = (props: { postData: Post }) => {
  const {
    postData: { content, meta },
  } = props

  return (
    <PostLayout
      children={content}
      publishedOn={meta.publishedOn}
      title={meta.title}
    />
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
