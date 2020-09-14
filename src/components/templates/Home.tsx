import { useCallback, useEffect, useRef, useState } from 'react'
import Layout from 'components/templates/Layout'
import Card from 'components/organisms/Card'

const defaultCount = 18
const threshold = 0.8

export default function Home({
  language = 'ja',
  posts
}: {
  language?: Language
  posts: Post[]
}): JSX.Element {
  const [count, setCount] = useState(defaultCount)
  const fetchMore = useCallback(() => {
    setCount(count + defaultCount)
  }, [count, setCount])

  useEffect(() => {
    const scrollHeight = document.documentElement.scrollHeight
    const onScrollEnd = (e: any) => {
      const diff = scrollHeight - window.pageYOffset
      console.log(scrollHeight, diff / scrollHeight)
      if (count < posts.length && diff / scrollHeight < threshold) {
        console.log('fetch')
        fetchMore()
      }
    }
    window.addEventListener('scroll', onScrollEnd)

    return () => window.removeEventListener('scroll', onScrollEnd)
  }, [fetchMore])

  return (
    <Layout>
      <section className="articles">
        <ul className="articles__list">
          {posts.slice(0, count).map((post: Post) => (
            <li className="articles__item" key={post.slug}>
              <Card post={post} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
