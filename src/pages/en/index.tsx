import { GetStaticProps } from 'next'
import Home from 'components/templates/Home'
import { getSortedPostsData } from 'lib/posts'

export default function Index({
  language,
  allPostsData
}: {
  language: Language,
  allPostsData: {
    title: string
    createdAt: string
    slug: string
  }[]
}) {
  return <Home language={language} posts={allPostsData} />
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData().slice(0, 30)
  return {
    props: {
      language: 'en',
      allPostsData
    }
  }
}
