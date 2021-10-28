import { getNavigation } from 'api/services/pages';
import { getPosts } from 'api/services/posts';
import { PageLink, Post } from 'commons/types';
import { GetServerSidePropsContext } from 'next';

export default function Page() {}

export async function getServerSideProps({res}: GetServerSidePropsContext) {
  console.log('Executing /sitemap.xml getServerSideProps...')

  const [pages, posts] = await Promise.all([ getNavigation(), getPosts() ])

  const pagesXml = pages.filter(isIndexable).map(mapPage)
  const postsXml = posts.filter(isIndexable).map(mapPost)

  const sitemap = buildSitemap([...pagesXml, ...postsXml].join(''))

  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate')
  res.setHeader('Content-Type', 'application/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

function isIndexable(page: PageLink | Post): boolean {
  return true
}

function mapPage(page: PageLink): string {
  return `
  <url>
    <loc>${page.slug}</loc>
    <lastmod>${page.publishedAt.substring(0, 10)}</lastmod>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  `
}

function mapPost(post: Post): string {
  return `
  <url>
    <loc>/blog/${post.slug}</loc>
    <lastmod>${post.publishedAt.substring(0, 10)}</lastmod>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  `
}

function buildSitemap(content: string): string {
  return `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
  ${content}
  </urlset>
  `
}