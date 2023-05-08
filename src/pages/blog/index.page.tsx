import Link from "next/link"
import { NavBar } from "../../components/NavBar"
import { Page } from "../../components/Page"
import { MyGetStaticProps } from "../../types/MyGetStaticProps"
import { ArticleMeta, getAllArticleMeta } from "./articles/lib/posts"
import { articleCard } from "./index.page.css"

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
      <div className={articleCard}>
        {article.title}
      </div>
    </Link>
  )
}

const BlogPage: React.FC<BlogPageProps> = ({ articles }) => {
  return (
    <Page>
      <NavBar />
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Page>
  )
}

export default BlogPage
