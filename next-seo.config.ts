import type { DefaultSeoProps } from 'next-seo'

export const defaultSeo: DefaultSeoProps = {
  title: 'yamachoo profile',
  description: 'yamachooのprofileサイトです',
  openGraph: {
    title: 'yamachoo profile',
    description: 'yamachooのprofileサイトです',
    type: 'website',
    locale: 'ja_jp',
    url: 'https://yamachoo.github.io/',
    site_name: 'yamachoo profile'
  },
  twitter: {
    handle: '@yamachoo567',
    site: '@yamachoo567',
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'application-name', content: 'yamachoo profile' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: '#000' },
    { name: 'apple-mobile-web-app-title', content: 'yamachoo profile' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'theme-color', content: '#000' }
  ],
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico' },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/icons/apple-touch-icon-180x180.png'
    },
    { rel: 'manifest', href: '/manifest.json' }
  ]
}
