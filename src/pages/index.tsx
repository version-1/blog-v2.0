import { GetStaticProps } from 'next'
import Home from 'components/templates/Home'
import { getSortedPostsData } from 'lib/posts'

export default function Index({
  allPostsData
}: {
  allPostsData: {
    title: string
    createdAt: string
    slug: string
  }[]
}): JSX.Element {
  return <Home posts={allPostsData} />
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData().slice(0, 30)
  return {
    props: {
      allPostsData
    }
  }
}
