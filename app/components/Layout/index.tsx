import { PageLink } from 'commons/types'
import { ReactElement } from 'react'
import { Footer } from 'app/components/Footer'
import { Navbar } from 'app/components/Navbar'
import { Navigation } from 'app/components/Navigation'

interface Props {
  children: ReactElement
  pages: readonly PageLink[]
}

function Layout({children, pages}: Props) {
  return (
    <>
      <div className="container">
        <Navbar />
        <Navigation pages={pages} />
      </div>

      <main className="container base-theme">
        {children}
      </main>

      <Footer />
    </>
  )
}

Layout.getLayout = (children: ReactElement, pageProps: Props) => {
  return (
    <Layout {...pageProps}>
      {children}
    </Layout>
  )
}

export {Layout}