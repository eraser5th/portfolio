import fs from "fs"
import path from "path"
import matter from "gray-matter"

const articlesDirectory = path.join(process.cwd(), "articles")

export type Article = {
  id: string
  content: string
  date: string
  title: string
}

export type ArticleMeta = {
  id: string
  date: string
  title: string
}

const getAllArticleFileNames = (): string[] => {
  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames
}

export const getAllArticleIds = (): string[] => {
  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames.map(fileName2Id)
}

const fileName2Id = (fileName: string): string => {
  return fileName.replace(/\.md$/, "")
}

export const getArticleMeta = (fileName: string) => {
  const id = fileName2Id(fileName)

  const fullPath = path.join(articlesDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const matterResult = matter(fileContents)

  return {
    id,
    ...matterResult.data,
  } as ArticleMeta
}

export const getAllArticleMeta = () => {
  const articleFileNames = getAllArticleFileNames()
  return articleFileNames.map(getArticleMeta)
}

export const getArticleById = (id: string): Article => {
  const fullPath = path.join(articlesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const matterResult = matter(fileContents)

  return {
    id,
    content: matterResult.content,
    ...matterResult.data,
  } as Article
}
