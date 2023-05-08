import Link from "next/link"
import { navbar, navItem } from "./NavBar.css"

export const NavBar: React.FC = () => {
  return (
    <header className={navbar}>
      <Link href={"/"} className={navItem}>About</Link>
      <Link href={"/blog"} className={navItem}>Blog</Link>
    </header>
  )
}
