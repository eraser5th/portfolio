import type { AppProps } from 'next/app';
import "./global.css"
 
const App = ({ Component }: AppProps) => {
  // Use the layout defined at the page level, if available
  return <Component />;
}

export default App;
