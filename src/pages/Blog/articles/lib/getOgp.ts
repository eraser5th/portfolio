import { JSDOM } from "jsdom"

type OGPProperty =
  | "og:image"
  | "og:title"
  | "og:description"
  | "og:url"
  | "og:type"
  | "og:site_name"

export type OGPPropertyShortHand =
  | "image"
  | "title"
  | "description"
  | "url"
  | "type"
  | "site_name"

const toShortHand = (s: OGPProperty): OGPPropertyShortHand => {
  return s.split("og:")[1] as OGPPropertyShortHand
}

type OGPPropertyAndContent<P extends OGPProperty | OGPPropertyShortHand> = {
  property: P
  content: string
}

export type OGP = Partial<Record<OGPPropertyShortHand, string>>

export const getOgpFromExternalWebsite = async (url: string): Promise<OGP> => {
  const res = await fetch(url)
  const text = await res.text()

  const dom = new JSDOM(text)
  const metaElements = [...dom.window.document.querySelectorAll("meta")]

  const ogpAndContentList = metaElements
    .filter((e) => e.hasAttribute("property"))
    .map(getPropertyAndContent)
    .filter(isOgp)

  const shorthandedOGPAndContentList = ogpAndContentList.map(
    ({ property, content }) => ({ property: toShortHand(property), content })
  )

  const ogp: OGP = {}
  shorthandedOGPAndContentList.forEach(({ property, content }) => {
    ogp[property] = content
  })

  return ogp
}

const getPropertyAndContent = (element: HTMLMetaElement) => {
  const property = element.getAttribute("property")?.trim()
  if (!property) {
    throw new Error("[getPropertyAndContent]: cannot get property")
  }

  const content = element.getAttribute("content")
  if (!content) {
    throw new Error("[getPropertyAndContent]: cannot get content")
  }

  return { content, property }
}

const isOgp = (x: {
  property: string | null
  content: string | null
}): x is OGPPropertyAndContent<OGPProperty> => {
  if (x.property === null || x.content === null) return false

  if (x.property === "og:image") return true
  if (x.property === "og:title") return true
  if (x.property === "og:description") return true
  if (x.property === "og:url") return true
  if (x.property === "og:type") return true
  if (x.property === "og:site_name") return true

  return false
}
