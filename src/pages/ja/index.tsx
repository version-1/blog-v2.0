import { GetStaticProps } from 'next'
import Home from 'components/templates/Home'
import { getSortedPostsData } from 'lib/posts'

interface Props {
  language: Language
  posts: Post[]
}

const Index: React.FC<Props> = ({ language, posts }) => {
  return <Home language={language} posts={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData().slice(0, 30)
  return {
    props: {
      language: 'ja',
      posts
    }
  }
}

export default Index
