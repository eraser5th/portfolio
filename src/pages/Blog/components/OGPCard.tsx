import { OGP } from "../lib/getOgp"
import { description, image, info, ogpCard, title } from "./OGPCard.css"

export const OGPCard: React.FC<{
  ogp: OGP
}> = ({ ogp }) => {
  return (
    <span className={ogpCard}>
      <img className={image} src={ogp.image} />
      <span className={info}>
        <span className={title}>{ogp.title || ogp.url}</span>
        <span className={description}>{ogp.description}</span>
      </span>
    </span>
  )
}
