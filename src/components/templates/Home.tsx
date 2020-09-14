import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import Link from 'next/link'
import Date from 'components/date'

export default function Home({
  language = 'ja',
  posts
}: {
  language?: string,
  posts: {
    title: string
    createdAt: string
    slug: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {posts.map(({ slug, createdAt, title }) => {
            return <li key={slug}>
              <Link href={`${language}/posts/[id]`} as={`${language}/posts/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={createdAt} />
              </small>
            </li>
          })}
        </ul>
      </section>
    </Layout>
  )
}
