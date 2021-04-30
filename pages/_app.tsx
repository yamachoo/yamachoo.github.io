import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { defaultSeo } from '@/next-seo.config'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
