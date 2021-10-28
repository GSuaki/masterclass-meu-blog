import type { GetServerSidePropsContext, InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { getAbout, getNavigation } from 'api/services/pages'
import { searchPosts } from 'api/services/posts'
import { getSocials } from 'api/services/socials'
import { Sidebar } from 'app/components/Sidebar'
import { Posts } from 'app/components/Posts'

export const getServerSideProps = async ({query}: GetServerSidePropsContext) => {
  const [about, pages, posts, socials] = await Promise.all([
    getAbout(),
    getNavigation(),
    searchPosts(query.q || ''),
    getSocials(),
  ])

  return {
    props: {
      about,
      pages,
      posts,
      socials,
    },
  }
}

function BlogPage({about, posts, socials}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Blog - TechBlog</title>
        <meta name="description" content="Minha página de Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <div className="col-md-9">
          <Posts posts={posts} />
        </div>
        <div className="col-md-3">
          <Sidebar about={about} socials={socials} />
        </div>
      </div>
    </>
  )
}

export default BlogPage