import fs from 'fs'
import { format } from 'date-fns'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

interface Matter {
  id: string
  path: string
  title: string
  slug: string
  content: any
  createdAt: string | Date
  updateAt: string | Date
}

const postsDirectory = path.join(process.cwd(), 'posts')
let cachedData: Map<string, Matter> = new Map()

const initialize = () => {
  cachedData = getSortedPostsData().reduce((acc: Map<string, Matter>, item: Matter) => {
    acc.set(item.slug, item)
    return acc
  }, new Map())
  console.log('initialize', cachedData.size)
}

const getPostsRecursively = (nodePath = postsDirectory, files = []) => {
  const entries = fs.readdirSync(nodePath, { withFileTypes: true })
  entries.forEach((entry) => {
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

const serializeContent = (content: any) => {
    const matterResult = matter(content)
    const createdAt = format(matterResult.data.createdAt, 'yyyy-MM-dd HH:mm:ss')
    const updatedAt = format(matterResult.data.updatedAt, 'yyyy-MM-dd HH:mm:ss')
    return {
      ...matterResult.data as Matter,
      content: matterResult.content,
      createdAt,
      updatedAt
    } as Matter
}

export function getSortedPostsData() {
  // Get file names under /posts
  const files = getPostsRecursively(postsDirectory)
  if (cachedData.size > 0) {
    return Array.from(cachedData.values())
  }

  const allPostsData = files.map(file => {
    // Remove ".md" from file name to get id
    const _path = file.replace(/\.md$/, '')

    // Read markdown file as string
    const content = fs.readFileSync(file, 'utf8')

    // Use gray-matter to parse the post metadata section
    const data = {
      path: _path,
      ...serializeContent(content)
    }

    // Combine the data with the id
    return data
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    return a.createdAt <= b.createdAt ? 1 : -1
  })
}

export function getAllPostIds() {
  const posts = getSortedPostsData()
  return posts.map((post: Matter) => {
    return {
      params: {
        id: post.slug
      }
    }
  })
}

export async function getPostData(id: string) {
  const data = cachedData.get(id)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(data.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...data
  }
}

initialize()
