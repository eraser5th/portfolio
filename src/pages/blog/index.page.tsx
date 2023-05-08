import Link from "next/link"
import { Page } from "../../components/Page"
import { MyGetServerSideProps } from "../../types/MyGetServerSideProps"
import { ArticleMeta, getAllArticleMeta } from "./articles/lib/posts"
import { articleCard } from "./index.page.css"

type BlogPageProps = {
  articles: ArticleMeta[]
}

export const getServerSideProps: MyGetServerSideProps<BlogPageProps> = () => {
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
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Page>
  )
}

export default BlogPage
