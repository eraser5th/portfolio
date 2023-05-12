import Link from "next/link"
import { NavBar } from "../../components/NavBar"
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
    <li>
      <Link key={article.id} href={href}>
        {article.title}
      </Link>
    </li>
  )
}

const BlogPage: React.FC<BlogPageProps> = ({ articles }) => {
  return (
    <Page>
      <NavBar />
      <ul>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
      </ul>
    </Page>
  )
}

export default BlogPage
