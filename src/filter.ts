import { IContent } from './types/content'

export function filterContent(item: IContent, filter: string): boolean {
  filter = `${String(filter).toLowerCase()}`;
  if (filter === 'all' || filter === '') {
    return true;
  }

  return item.type === filter;
}
