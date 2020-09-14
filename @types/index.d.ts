type Language = 'ja' | 'en'

type Post = {
  title: string
  unlisted?: boolean
  language: Language
  slug: string
  path: string
  content: string
  contentHtml: string
  createdAt: string
  categories: string[]
  tags: string[]
}
