import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPostIds, getPostData } from 'lib/posts'
import Post from 'components/templates/Post'

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostData(params?.id as string)
  return {
    props: {
      post
    }
  }
}
