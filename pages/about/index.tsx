import Head from 'next/head'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Sidebar } from 'app/components/Sidebar'
import { getAbout, getNavigation } from 'api/services/pages'
import { getSocials } from 'api/services/socials'

export const getStaticProps = async ({}: GetStaticPropsContext) => {
  console.log('Executing /about getStaticProps...')
  const [ pages, about, socials ] = await Promise.all([
    getNavigation() ,
    getAbout(),
    getSocials(),
  ])

  return {
    props: {
      about,
      pages,
      socials,
    },
    revalidate: 30 // em segundos
  }
}

function AboutPage({about, socials}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <div className="col-md-9">
          <div dangerouslySetInnerHTML={{__html: about.content.html || ''}} />
        </div>
        <div className="col-md-3">
          <Sidebar socials={socials} />
        </div>
      </div>
    </>
  )
}

export default AboutPage