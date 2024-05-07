import { JSDOM } from "jsdom"

const OGPPropertyList = [
  "og:image",
  "og:title",
  "og:description",
  "og:url",
  "og:type",
  "og:site_name",
] as const

type OGPProperty = (typeof OGPPropertyList)[number]

export type OGPPropertyShortHand = OGPProperty extends `og:${infer U}`
  ? U
  : never

const toShortHand = (s: OGPProperty): OGPPropertyShortHand => {
  return s.split("og:")[1] as OGPPropertyShortHand
}

const getPropertyAndContent = (element: HTMLMetaElement) => {
  const property = element.getAttribute("property")?.trim()
  if (!property) {
    throw new Error("[getPropertyAndContent]: cannot get property")
  }

  const content = element.getAttribute("content")
  if (content !== "" && !content) {
    throw new Error("[getPropertyAndContent]: cannot get content")
  }

  return { content, property }
}

type OGPPropertyAndContent = {
  property: OGPProperty
  content: string
}

const isOgp = (x: {
  property: string | null
  content: string | null
}): x is OGPPropertyAndContent => {
  if (x.property === null || x.content === null) return false

  return (
    OGPPropertyList
      // Type convert
      .map((s) => s + "")
      .includes(x.property)
  )
}

export type OGP = Partial<Record<OGPPropertyShortHand, string>>

export const getOgpFromExternalWebsite = async (url: string): Promise<OGP> => {
  const res = await fetch(url)
  const text = await res.text()

  const dom = new JSDOM(text)
  const metaElements = [...dom.window.document.querySelectorAll("meta")]

  return metaElements
    .filter((e) => e.hasAttribute("property"))
    .filter((e) => e.hasAttribute("content"))
    .map(getPropertyAndContent)
    .filter(isOgp)
    .reduce(
      (ass, { property, content }) => ({
        [toShortHand(property)]: content,
        ...ass,
      }),
      {} as OGP
    )
}
