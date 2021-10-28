import Head from 'next/head'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Sidebar } from 'app/components/Sidebar'
import { getAbout, getNavigation } from 'api/services/pages'
import { getSocials } from 'api/services/socials'
import React from 'react'

export const getStaticProps = async ({}: GetStaticPropsContext) => {
  console.log('Executing / getStaticProps...')
  const [ pages, about, socials ] = await Promise.all([
    getNavigation(),
    getAbout(),
    getSocials(),
  ])

  return {
    props: {
      about,
      pages,
      socials,
    },
  }
}

function Custom404Page({about, socials}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <div className="col-md-9">
          Ops! Não encontrei a página que você buscava.
        </div>
        <div className="col-md-3">
          <Sidebar about={about} socials={socials} />
        </div>
      </div>
    </>
  )
}

export default Custom404Page
