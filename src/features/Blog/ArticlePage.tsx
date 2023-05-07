import { Page } from "../../components/Page"
import { Markdown } from "./components/Markdown"

type Article = {
  content: string
}

const content = `
[@ogp](https://zli.works)

[@ogp](https://zenn.dev/tomi/articles/2021-03-22-blog-card)
`

export const ArticlePage: React.FC = () => {
  const article: Article = {
    content: content,
  }

  return <Page><Markdown>{article.content}</Markdown></Page>
}
