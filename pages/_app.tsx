import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import { defaultSeo } from '@/next-seo.config'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeo} />

      <div className="min-h-screen flex flex-col">
        <Header />

        <Component {...pageProps} />

        <Footer />
      </div>
    </>
  )
}

export default MyApp
