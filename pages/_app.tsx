import '../styles/theme.css'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import '@fortawesome/fontawesome-free/css/solid.min.css'
import type { AppProps } from 'next/app'
import { Layout } from 'app/components/Layout'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, pageProps: object) => ReactNode
}

type AppLayoutProps = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const getLayout = Component.getLayout || Layout.getLayout
  return getLayout( <Component {...pageProps} />, pageProps )
}

export default MyApp
