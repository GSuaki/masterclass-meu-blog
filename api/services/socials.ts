import { Social } from 'commons/types'
import { graphCms } from './graphcms'

export async function getSocials(): Promise<ReadonlyArray<Social>> {
  interface Result { socials: readonly Social[] }

  const query = `
  {
    socials {
      id
      title
      url
    }
  }
  `

  const data = await graphCms<Result>(query)
  return data.socials
}