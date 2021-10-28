import { Post } from 'commons/types';
import { graphCms } from './graphcms';

const MAX_RESULT = 3

export async function getRecentPostsSlugs(): Promise<ReadonlyArray<string>> {
  interface Result { posts: readonly { slug: string }[] }

  const query = `
  {
    posts {
      slug
    }
  }
  `

  const data = await graphCms<Result>(query)
  return data.posts.map(props => props.slug)
}

export async function getPostBySlug(slug: string): Promise<Post> {
  interface Result { post: Post }

  const query = `
  {
    post(where: { slug: "${slug}" }) {
      author {
        name
      }
      id
      publishedAt
      title
      slug
      content {
        html
        text
      }
      tags
      coverImage {
        url
      }
    }
  }
  `

  const data = await graphCms<Result>(query)
  return data.post
}

export async function getRecentPosts(): Promise<ReadonlyArray<Post>> {
  interface Result { posts: readonly Post[] }

  const query = `
  {
    posts(first: ${MAX_RESULT}) {
      author {
        name
      }
      id
      publishedAt
      title
      slug
      content {
        html
        text
      }
      tags
      coverImage {
        url
      }
    }
  }
  `

  const data = await graphCms<Result>(query)
  return data.posts
}

export async function getPosts(): Promise<ReadonlyArray<Post>> {
  interface Result { posts: readonly Post[] }

  const query = `
  {
    posts {
      author {
        name
      }
      id
      publishedAt
      title
      slug
      content {
        html
        text
      }
      tags
      coverImage {
        url
      }
    }
  }
  `

  const data = await graphCms<Result>(query)
  return data.posts
}

export async function searchPosts(term: string | string[]): Promise<ReadonlyArray<Post>> {
  interface Result { posts: readonly Post[] }

  const query = `
  {
    posts(where: { OR: { slug_contains: "${term}", title_contains: "${term}" } }) {
      author {
        name
      }
      id
      publishedAt
      title
      excerpt
      slug
      content {
        html
        text
      }
      tags
      coverImage {
        url
      }
    }
  }
  `

  const data = await graphCms<Result>(query)
  return data.posts
}