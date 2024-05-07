import type { GetStaticPaths } from "next"
import { useRouter } from "next/router"
import { Page } from "../../../components/Page"
import { getOgpLinksFromMarkdown } from "./lib/getOgpLinksFromMarkdown"
import { Markdown } from "./components/Markdown"
import { getOgpFromExternalWebsite, OGP } from "./lib/getOgp"
import { getAllArticleIds, getArticleById } from "./lib/posts"
import { MyGetStaticProps } from "../../../types/MyGetStaticProps"
import { useRecoilState } from "recoil"
import { ogpListState } from "./store/ogpListState"

type Article = {
  content: string
}

type PostPageParams = {
  id: string
}

type PostPageProps = {
  article: Article
  ogpList: OGP[]
}

export const getStaticProps: MyGetStaticProps<
  PostPageParams,
  PostPageProps
> = async ({ params: { id } }) => {
  const article = getArticleById(id)
  const ogpLinks = getOgpLinksFromMarkdown(article.content)
  console.log(ogpLinks)

  const fetcher = async () => {
    const ogpList = await Promise.all(
      ogpLinks.map((link) => {
        return getOgpFromExternalWebsite(link)
      })
    )
    return ogpList
  }

  return { props: { article, ogpList: await fetcher() } }
}

export const getStaticPaths: GetStaticPaths<PostPageParams> = () => {
  const ids = getAllArticleIds()
  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: true,
  }
}

const ArticlePage: React.FC<PostPageProps> = ({
  article,
  ogpList: _ogpList,
}) => {
  const router = useRouter()
  const [, setOGPList] = useRecoilState(ogpListState)
  setOGPList(_ogpList)

  if (router.isFallback) {
    return <Page>Now loading...</Page>
  }

  return (
    <Page>
      <Markdown>{article.content}</Markdown>
    </Page>
  )
}

export default ArticlePage
