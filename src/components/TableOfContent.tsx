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

  useEffect(() => {}, [])

  return (
    <div>
      <ul
        className={css({
          m: "0",
          marginStart: "4",
        })}
      >
        {headings.map((h) => (
          <li
            key={h.text}
            className={css({
              ms: h.level === 2 ? "0" : "4",
              listStyle: h.level === 2 ? "disc" : "circle",
            })}
          >
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
