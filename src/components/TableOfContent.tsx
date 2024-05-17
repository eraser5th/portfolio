import { useEffect, useState } from "react"
import { css } from "../../styled-system/css"
import Link from "next/link"

type Headings = {
  id: string
  text: string
  level: number
}

export const TableOfContent: React.FC = () => {
  const [headings, setHeadings] = useState<Headings[]>([])

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("h2, h3")
    )

    setHeadings(
      elements.map((e) => ({
        id: e.id,
        text: e.innerText,
        level: Number(e.nodeName.charAt(1)),
      }))
    )
  }, [])

  return (
    <div>
      <ul
        className={css({
          m: "0",
          marginStart: "4",
          "& > li": {
            listStyle: "none",
          },
        })}
      >
        {headings.map((h) => (
          <li key={h.text}>
            <Link
              href={`#${h.id}`}
              className={css({
                color: "white",
              })}
              scroll
            >
              {h.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
