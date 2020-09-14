import Head from 'next/head'
import Date from 'components/atoms/Date'
import Layout from 'components/templates/Layout'

export default function Post({
  post: { title, createdAt, contentHtml }
}: {
  post: Post
}): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1>{title}</h1>
        <div>
          <Date value={createdAt} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  )
}
