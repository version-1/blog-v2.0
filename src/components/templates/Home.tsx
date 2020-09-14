import Layout from 'components/templates/Layout'
import Link from 'next/link'
import Date from 'components/atoms/Date'

export default function Home({
  language = 'ja',
  posts
}: {
  language?: Language
  posts: {
    title: string
    createdAt: string
    slug: string
  }[]
}): JSX.Element {
  return (
    <Layout>
      <section>
        <ul>
          {posts.map(({ slug, createdAt, title }) => (
            <li key={slug}>
              <Link
                href={`${language}/posts/[id]`}
                as={`${language}/posts/${slug}`}
              >
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date value={createdAt} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
