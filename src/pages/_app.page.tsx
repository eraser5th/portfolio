import type { AppProps } from "next/app"
import { RecoilRoot } from "recoil"
import "./_app.page.css"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default App
