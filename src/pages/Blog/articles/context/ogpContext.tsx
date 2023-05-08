import { createContext } from "vm"
import { OGP } from "../lib/getOgp"

const ogpContext = createContext<OGP[]>([])
export const OGPContextProvider = () => {
  return <ogpContext.
}
