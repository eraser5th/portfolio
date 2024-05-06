import Link from "next/link"
import { css } from "../../styled-system/css"

export const NavBar: React.FC = () => {
  return (
    <header className={headerStyle}>
      <Link href={"/"} className={navItem}>
        About
      </Link>
      <Link href={"/blog"} className={navItem}>
        Blog
      </Link>
    </header>
  )
}

const headerStyle = css({
  width: "full",
  height: "20",
  display: "flex",
  gap: "12",
  justifyContent: "center",
  alignItems: "center",
})

const navItem = css({
  fontSize: "3xl",
  color: "white",
})
