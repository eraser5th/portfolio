import { css } from "../../styled-system/css"

export const Page: React.FC<{
  children: React.ReactNode | React.ReactNode[]
}> = ({ children }) => {
  return <main className={main}>{children}</main>
}

const main = css({
  minHeight: "screen",
  width: ["full", "screen.narrow", "screen.middle", "screen.wide"],
  py: "20",
  px: "4",
  overflowWrap: "break-word",
  margin: "auto",
  textAlign: "start",
})
