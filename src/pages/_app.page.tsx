import type { AppProps } from "next/app"
import { RecoilRoot } from "recoil"
import "../styles/globals.css"
import "./_app.page.css"
import { NavBar } from "../components/NavBar"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <NavBar />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default App
