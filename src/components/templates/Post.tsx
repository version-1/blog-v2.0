import Head from 'next/head'
import Date from 'components/date'
import Layout from 'components/layout'

export default function Post({
  post
}: {
  post: {
    title: string
    createdAt: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1>{post.title}</h1>
        <div>
          <Date dateString={post.createdAt} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  )
}


