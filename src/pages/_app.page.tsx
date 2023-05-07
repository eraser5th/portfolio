import type { AppProps } from 'next/app';
import "./_app.page.css"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps}/>
}

export default App;
