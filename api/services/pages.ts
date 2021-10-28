import { Page, PageLink } from 'commons/types';
import { graphCms } from './graphcms';

const sortByPosition = (a: PageLink, b: PageLink) => a.position > b.position ? 1 : -1;

export async function getNavigation(): Promise<ReadonlyArray<PageLink>> {
  interface Result { pages: PageLink[] }

  const query = `
  {
    pages {
      id
      slug
      title
      position
      publishedAt
    }
  }
  `

  const data = await graphCms<Result>(query)
  return data.pages.sort(sortByPosition)
}

export async function getAbout(): Promise<Page> {
  interface Result { page: Page }

  const query = `
  {
    page(where:{ id: "cke1ffer402co0156d87fjc5d" }) {
      id
      slug
      title
      subtitle
      publishedAt
      content {
        html
      }
    }
  }
  `

  const data = await graphCms<Result>(query)
  return data.page
}