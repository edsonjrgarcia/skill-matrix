import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { GlobalStyles } from '@/styles/global-styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <GlobalStyles/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
