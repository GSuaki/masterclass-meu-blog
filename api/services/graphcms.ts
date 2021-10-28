
const URL = process.env.GRAPH_CMS_CONTENT_API
const TOKEN = process.env.GRAPH_CMS_PROD_KEY

export async function graphCms<T extends object>(query: string, variable: object = {}): Promise<T> {
  const result = await fetch(`${URL}`, {
    body: JSON.stringify({ query, variable }),
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    }
  })

  const { data } = await result.json()
  return data
}