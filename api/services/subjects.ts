import { Subject } from 'commons/types';
import { graphCms } from './graphcms';

export async function getSubjects(): Promise<ReadonlyArray<Subject>> {
  interface Result { subjects: readonly Subject[] }

  const query = `
  {
    subjects {
      id
      title
			subtitle
      icon
    }
  }
  `

  const data = await graphCms<Result>(query)
  return data.subjects
}