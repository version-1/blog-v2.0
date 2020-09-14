import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from 'components/layout'
import { getAllPostIds, getPostData } from 'lib/posts'
import Head from 'next/head'
import Date from 'components/date'

export default function Post({
  postData
}: {
  postData: {
    title: string
    createdAt: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.createdAt} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  console.log(paths.slice(paths.length - 40, -1))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}
