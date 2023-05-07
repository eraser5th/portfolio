import { style } from "@vanilla-extract/css"

export const page = style({
  "@media": {
    "(1024px <= width)": {
      width: "960px",
    },
    "(768px <= width < 1024px)": {
      width: "720px",
    },
    "(640px <= width <= 768px)": {
      width: "620px",
    },
  },
  padding: "0 16px",
  margin: "auto",
  minHeight: "100vh",
  textAlign: "start",
})
