import { useCallback, useEffect, useRef, useState } from 'react'
import Layout from 'components/templates/Layout'
import Link from 'next/link'
import Date from 'components/atoms/Date'

const defaultCount = 18
const threshold = 0.2

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
  const [count, setCount] = useState(defaultCount)
  const fetchMore = useCallback(() => {
    setCount(count + defaultCount)
  }, [count, setCount])

  useEffect(() => {
    const scrollHeight = document.documentElement.scrollHeight
    const onScrollEnd = (e: any) => {
      const diff = scrollHeight - window.pageYOffset
      if (count < posts.length && diff / scrollHeight < threshold) {
        fetchMore()
      }
    }
    window.addEventListener('scroll', onScrollEnd)

    return () => window.removeEventListener('scroll', onScrollEnd)
  }, [fetchMore])

  return (
    <Layout>
      <section>
        <ul>
          {posts.slice(0, count).map(({ slug, createdAt, title }) => (
            <li key={slug}>
              <div className="card">
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
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
