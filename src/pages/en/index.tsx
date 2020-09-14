import { GetStaticProps } from 'next'
import Home from 'components/templates/Home'
import { getPostList } from 'lib/posts'

interface Props {
  language: Language
  posts: Post[]
}

const Index: React.FC<Props> = ({ language, posts }) => {
  return <Home language={language} posts={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
  const language = 'en'
  const posts = getPostList(language)
  return {
    props: {
      language,
      posts
    }
  }
}

export default Index
