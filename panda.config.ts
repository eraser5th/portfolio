import { defineConfig, Tokens } from "@pandacss/dev"

const tokens: Tokens = {
  sizes: {
    "screen.wide": { value: "1080px" },
    "screen.middle": { value: "720px" },
    "screen.narrow": { value: "620px" },
  },
}

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens,
    },
  },
  outdir: "styled-system",
  strictTokens: true,
  syntax: "object-literal",
  jsxFramework: "react",
})
