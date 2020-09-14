import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPostIds, getPostData } from 'lib/posts'
import Post from 'components/templates/Post'

export default Post

const language = 'en'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds(language)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostData(
    params?.language as Language,
    params?.id as string
  )
  return {
    props: {
      post
    }
  }
}
