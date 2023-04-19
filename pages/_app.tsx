import '@/styles/globals.css'
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import Navbar from '../components/Navbar';
import { ThemeProvider } from 'next-themes'
import Overlay from '../components/overlay/overlay'
import Overlay2 from '../components/overlay/overlay2'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div >
    <ThemeProvider enableSystem={true} attribute="class" >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <Script src="https://cdn.tailwindcss.com?plugins=typography"></Script>
      <Navbar />
      <Component {...pageProps} />
      <Overlay />
      <Overlay2 />
     </ThemeProvider>  
    </div>
  );
}