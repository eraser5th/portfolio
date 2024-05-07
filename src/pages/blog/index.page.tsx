import Link from "next/link"
import { Page } from "../../components/Page"
import { MyGetStaticProps } from "../../types/MyGetStaticProps"
import { ArticleMeta, getAllArticleMeta } from "./articles/lib/posts"

type BlogPageProps = {
  articles: ArticleMeta[]
}

export const getStaticProps: MyGetStaticProps<object, BlogPageProps> = () => {
  return {
    props: { articles: getAllArticleMeta() },
  }
}

const ArticleCard: React.FC<{
  article: ArticleMeta
}> = ({ article }) => {
  const href = `/blog/articles/${article.id}`
  return (
    <Link key={article.id} href={href}>
      {article.title}
    </Link>
  )
}

const BlogPage: React.FC<BlogPageProps> = ({ articles }) => {
  return (
    <Page>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </Page>
  )
}

export default BlogPage
