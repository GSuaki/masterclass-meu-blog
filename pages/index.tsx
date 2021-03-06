import Head from 'next/head'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Favorites } from 'app/components/Favorites'
import { RecentPosts } from 'app/components/RecentPosts'
import { Sidebar } from 'app/components/Sidebar'
import { getRecentPosts } from 'api/services/posts'
import { getAbout, getNavigation } from 'api/services/pages'
import { getSocials } from 'api/services/socials'
import { getSubjects } from 'api/services/subjects'
import React from 'react'

export const getStaticProps = async ({}: GetStaticPropsContext) => {
  console.log('Executing / getStaticProps...')
  const [ pages, posts, about, socials, subjects ] = await Promise.all([
    getNavigation() ,
    getRecentPosts(),
    getAbout(),
    getSocials(),
    getSubjects(),
  ])

  return {
    props: {
      about,
      pages,
      posts,
      socials,
      subjects
    },
    revalidate: 30 // em segundos
  }
}

function HomePage({about, posts, socials, subjects}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <div className="col-md-9">
          <RecentPosts posts={posts}/>
        </div>
        <div className="col-md-3">
          <Sidebar about={about} socials={socials} />
        </div>
      </div>

      <div className="row">
        <Favorites favorites={subjects} />
      </div>
    </>
  )
}

export default HomePage
