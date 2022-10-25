import type { AppProps } from 'next/app'
import nProgress from 'nprogress'
import { Router } from 'next/router'

import "../styles/nprogress.css"
import { GlobalStyle } from '../styles/global'

import '../lang'

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

nProgress.configure({
  showSpinner: false,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
