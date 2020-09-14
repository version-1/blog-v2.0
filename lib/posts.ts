import fs from 'fs'
import { format } from 'date-fns'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

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
      ...matterResult.data,
      createdAt,
      updatedAt
    }
}

export function getSortedPostsData() {
  // Get file names under /posts
  const files = getPostsRecursively(postsDirectory)
  const allPostsData = files.map(file => {
    // Remove ".md" from file name to get id
    const id = file.replace(/\.md$/, '')

    // Read markdown file as string
    const content = fs.readFileSync(file, 'utf8')

    // Use gray-matter to parse the post metadata section
    const data = serializeContent(content)

    // Combine the data with the id
    return {
      id,
      ...data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    return a.createdAt <= b.createdAt ? 1 : -1
  })
}

export function getAllPostIds() {
  const fileNames = getPostsRecursively(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string })
  }
}
