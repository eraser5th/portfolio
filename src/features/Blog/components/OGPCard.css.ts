import { style } from "@vanilla-extract/css";

export const ogpCard = style({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
  border: "1px solid white",
  borderRadius: "4px",
})

export const info = style({
  display: "flex",
  flexDirection: "column"
})

export const image = style({
  width: '100px',
  height: '100px',
  objectFit: 'cover',
})

export const title = style({
  color: "white",
  fontSize: "24px"
})

export const description = style({
  color: "white",
})
