import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'

import '../lang'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
