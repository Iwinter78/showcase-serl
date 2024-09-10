import { IContent } from './types/content'

export function searchContent(item: IContent, search: string): boolean {
  return Object.values(item).some((value) => {
    if (typeof value === 'string') {
      value = value.toLowerCase()
      search = search.toLowerCase()
      return value.includes(search)
    }
  })
}
