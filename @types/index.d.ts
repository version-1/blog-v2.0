type Language = 'ja' | 'en'

type Post = {
  title: string
  slug: string
  path: string
  content: string
  contentHtml: string
  categories: string[]
  tags: string[]
}
