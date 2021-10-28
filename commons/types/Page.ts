import { Content, SEO } from '.';

export interface Page {
  id: string
  title: string
  slug: string
  subtitle: string
  content: Content
  position: number
  seo: SEO
}

export interface PageLink {
  id: string
  title: string
  slug: string
  publishedAt: string
  position: number
}