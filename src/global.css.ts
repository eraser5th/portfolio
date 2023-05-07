import { globalStyle } from "@vanilla-extract/css"

globalStyle("#root", {
  margin: "0 auto",
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  lineHeight: 1.5,
  fontWeight: 400,
  colorScheme: "light dark",
  color: "rgba(255, 255, 255, 0.87)",
  backgroundColor: "#242424",
  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  WebkitTextSizeAdjust: "100%",
})

globalStyle("html", {
  '@media': {
    '(width <= 640px)': {
      fontSize: "15px"
    }
  },
})

globalStyle("a", {
  fontWeight: 500,
  color: "#646cff",
  textDecoration: "inherit",
})

globalStyle("a:hover", {
  color: "#535bf2",
})

globalStyle("body", {
  margin: 0,
})

globalStyle("button", {
  borderRadius: "8px",
  border: "1px solid transparent",
  padding: "0.6em 1.2em",
  fontSize: "1em",
  fontWeight: 500,
  fontFamily: "inherit",
  backgroundColor: "#1a1a1a",
  cursor: "pointer",
  transition: "border-color 0.25s",
})

globalStyle("button:hover", {
  borderColor: "#646cff",
})

globalStyle("button:focus-visible", {
  outline: "4px auto -webkit-focus-ring-color",
})
