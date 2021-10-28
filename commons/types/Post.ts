import { Author, Content, SEO, Thumbnail } from '.';

export interface Post {
  title: string
  slug: string
  publishedAt: string
  seo: SEO
  coverImage: Thumbnail
  content: Content
  tags: readonly string[]
  author: Author
}