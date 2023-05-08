export const getOgpLinksFromMarkdown = (content: string) => {
  const lines = content.split("\n").map((l) => l.trim())

  const ogpLines = lines
    .filter((line) => !!line)
    .filter((line) => {
      const ogpRegex = /^\[@ogp\]\(https?:\/\/.*\)$/
      return ogpRegex.test(line)
    })

  const ogpLinks = ogpLines.map((line) => {
    const [, linkInParensis] = line.split("[@ogp]")
    return linkInParensis.slice(1, -1)
  })

  return ogpLinks
}
