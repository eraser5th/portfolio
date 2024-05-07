import { defineConfig, Tokens } from "@pandacss/dev"

const tokens: Tokens = {
  sizes: {
    "screen.wide": { value: "960px" },
    "screen.middle": { value: "720px" },
    "screen.narrow": { value: "600px" },
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
