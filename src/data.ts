import { IContent } from './types/content'
import { promises as fsPromises } from 'fs'

const refreshInterval = 10000 // 10 seconds WARNING: Server needs to be restarted to apply changes

export async function fetchContent(): Promise<IContent[] | null> {
  const raw = await fsPromises.readFile('./src/data/content.json', 'utf-8')
  try {
    const content: IContent[] = JSON.parse(raw)

    const keys: (keyof IContent)[] = [
      'id',
      'title',
      'description',
      'screenshots',
      'tags',
      'url',
    ]
    if (
      !content.every((item) => keys.every((key) => item[key] !== undefined))
    ) {
      throw new Error('Inproper key format')
    }
    return content
  } catch (e) {
    console.error(e)
    return null
  }
}

function refreshContent() {
  setInterval(async () => {
    await fetchContent()
    //console.log('Content refreshed')
  }, refreshInterval)
}

refreshContent()