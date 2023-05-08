import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { OGPCard } from "./OGPCard"
import { useRecoilValue } from "recoil"
import { ogpListState } from "../store/ogpListState"

export const Markdown: React.FC<{
  children: string
}> = ({ children }) => {
  return (
    <article>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: Code,
          a: Anchor,
        }}
      >
        {children}
      </ReactMarkdown>
    </article>
  )
}

const Anchor: React.FC<{
  children: React.ReactNode & React.ReactNode[]
  href?: string
}> = ({ children, href }) => {
  const ogpList = useRecoilValue(ogpListState)
  const ogp = ogpList.find((ogp) => ogp.url === href)

  return <a href={href}>{ogp ? <OGPCard ogp={ogp} /> : children}</a>
}

const Code: React.FC<{
  children: React.ReactNode & React.ReactNode[]
  inline?: boolean
}> = ({ children, inline }) => {
  if (inline) {
    return <InlineCode>{children}</InlineCode>
  }
  return <CodeBlock>{children}</CodeBlock>
}

const InlineCode: React.FC<{
  children: React.ReactNode & React.ReactNode[]
}> = ({ children }) => {
  return <code>{children}</code>
}

const CodeBlock: React.FC<{
  children: React.ReactNode & React.ReactNode[]
  className?: string
}> = ({ children, className }) => {
  const match = /language-(\w+)/.exec(className || "")
  const lang = match && match[1] ? match[1] : ""

  return (
    <SyntaxHighlighter
      style={atomOneDark /* eslint-disable-line */}
      language={lang}
      showLineNumbers
      customStyle={{
        margin: "16px 0px",
        borderRadius: "4px",
        fontSize: "16px",
        wordSpacing: "4px",
        fontFamily: "monospace",
      }}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  )
}
