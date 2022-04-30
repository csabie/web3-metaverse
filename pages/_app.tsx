import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // az appid-t és a szerverUrl-t a moralis-on belül a servers tabon, majd a details-ra kattintva kapjuk meg
    <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID || 'xxxxxxxxxxxxxxxxxxx'} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL || 'xxx'}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp
