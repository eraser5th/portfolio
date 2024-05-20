import { useEffect, useRef, useState } from "react"
import { css, cva } from "../../styled-system/css"
import Link from "next/link"

type Headings = {
  id: string
  text: string
  level: 2 | 3
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
        level: Number(e.nodeName.charAt(1)) as 2 | 3,
      }))
    )
  }, [])

  const { activeId } = useHeadsObserver()

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
              listStyle: h.level === 2 ? "disc" : "circle",
            })}
          >
            <Link
              href={`#${h.id}`}
              className={link(h.level, h.id === activeId)}
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

const linkRecipe = cva({
  variants: {
    color: {
      level2: {
        color: "gray.400",
      },
      level3: {
        color: "gray.400",
      },
      active: {
        color: "white",
      },
    },
    fontSize: {
      level2: {
        fontSize: "sm",
      },
      level3: {
        fontSize: "xs",
      },
    },
    fontWeight: {
      inactive: {
        fontWeight: "medium",
      },
      active: {
        fontWeight: "bold",
      },
    },
  },
})

const link = (level: 2 | 3, active: boolean) =>
  linkRecipe({
    color: active ? "active" : level === 2 ? "level2" : "level3",
    fontSize: level === 2 ? "level2" : "level3",
    fontWeight: active ? "active" : "inactive",
  })

export function useHeadsObserver() {
  const observer = useRef<IntersectionObserver>()
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const handleObsever: IntersectionObserverCallback = (entries) => {
      entries.reverse().forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }
    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: "-20% 0% -35% 0px",
    })

    const elements = document.querySelectorAll("h2, h3")
    elements.forEach((elem) => observer.current?.observe(elem))

    return () => observer.current?.disconnect()
  }, [])

  return { activeId }
}
