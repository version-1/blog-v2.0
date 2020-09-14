import fs from 'fs'
import { format } from 'date-fns'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')
const cache = {
  all: new Map<string, Post>(),
  ja: new Map<string, Post>(),
  en: new Map<string, Post>()
}

const initialize = () => {
  getSortedPostsData().forEach((item: Post) => {
    cache.all.set(item.slug, item)
    cache[item.language].set(item.slug, item)
  })
  console.log('initialize', cache.all.size)
}

const getPostsRecursively = (
  nodePath = postsDirectory,
  files: string[] = []
): string[] => {
  const entries = fs.readdirSync(nodePath, { withFileTypes: true })
  entries.forEach((entry: { name: string; isDirectory: () => boolean }) => {
    const targetPath = nodePath + '/' + entry.name
    if (entry.isDirectory()) {
      files.concat(getPostsRecursively(targetPath, files))
      return
    }
    if (targetPath.match(/\.md$/)) {
      files.push(targetPath)
    }
  })
  return files
}

const serializeContent = (content: string) => {
  const matterResult = matter(content)
  const createdAt = format(matterResult.data.createdAt, 'yyyy-MM-dd HH:mm:ss')
  const updatedAt = format(matterResult.data.updatedAt, 'yyyy-MM-dd HH:mm:ss')
  return {
    ...(matterResult.data as Post),
    content: matterResult.content,
    createdAt,
    updatedAt
  } as Post
}

function getSortedPostsData(): Post[] {
  // Get file names under /posts
  const files = getPostsRecursively(postsDirectory)

  const allPostsData = files.map((file: any) => {
    // Remove ".md" from file name to get id
    const _path = file.replace(/\.md$/, '')

    // Read markdown file as string
    const content = fs.readFileSync(file, 'utf8')

    // Use gray-matter to parse the post metadata section
    const data = {
      ...serializeContent(content),
      path: _path
    }

    // Combine the data with the id
    return data
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    return a.createdAt <= b.createdAt ? 1 : -1
  })
}

interface PostParams {
  id: string
  language: Language
}

export function getAllPostIds(language?: Language): { params: PostParams }[] {
  const posts = Array.from((cache[language as Language] || cache.all).values())
  return posts.map((post: Post) => {
    return {
      params: {
        id: post.slug,
        language: post.language
      }
    }
  })
}

export const getPostList = (language?: Language): Post[] => {
  return Array.from((cache[language as Language] || cache.all).values())
}

export async function getPostData(
  language: Language,
  id: string
): Promise<Post> {
  const data = cache[language].get(id)
  if (!data) {
    throw new Error('postData is missing' + id)
  }

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(data.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    ...data,
    contentHtml
  } as Post
}

initialize()
