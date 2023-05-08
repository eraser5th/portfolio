import { style } from "@vanilla-extract/css"

export const navbar = style({
  width: "100%",
  height: "80px",
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  alignItems: "center",
})

export const navItem = style({
  fontSize: "32px",
  color: "white",
})
