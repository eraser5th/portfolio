import { css } from "../../styled-system/css"

export const Page: React.FC<{
  children: React.ReactNode | React.ReactNode[]
  sideNav?: React.ReactNode | React.ReactNode[]
}> = ({ children, sideNav }) => {
  return (
    <main className={main}>
      <article className={article}>{children}</article>
      {sideNav && <nav className={navigator}>{sideNav}</nav>}
    </main>
  )
}

const main = css({
  minHeight: "screen",
  width: [
    "full",
    "screen.narrow",
    "screen.middle",
    "screen.wide",
    "screen.extra-wide",
  ],
  display: "flex",
  flexDir: "row",
  gap: "8",
  alignItems: "start",
  py: "20",
  px: "4",
  overflowWrap: "break-word",
  margin: "auto",
  textAlign: "start",
})

const article = css({
  width: ["full", "full", "full", "5xl", "5xl"],
})

const navigator = css({
  position: "sticky",
  top: "56",
  borderStyle: "solid",
  borderWidth: "1",
  borderRadius: "lg",
  p: "4",
  visibility: ["hidden", undefined, undefined, "visible", "visible"],
  width: ["0", "0", "0", "lg", "lg"],
})
