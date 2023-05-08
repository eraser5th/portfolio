import { atom } from "recoil"
import { OGP } from "../lib/getOgp"

export const ogpListState = atom<OGP[]>({
  key: "OGP",
  default: [],
})
