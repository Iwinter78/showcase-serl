import { IContent } from './types/content'
import { promises as fsPromises, watch } from 'fs'

export async function fetchContent(): Promise<IContent[] | null> {
  const raw = await fsPromises.readFile('./src/data/content.json', 'utf-8')
  try {
    const content: IContent[] = JSON.parse(raw)

    const keys: (keyof IContent)[] = [
      'id',
      'title',
      'content',
      'description',
      'screenshots',
      'tags',
      'url',
    ]
    if (!content.every((item) => keys.every((key) => key in item))) {
      throw new Error('Inproper key format')
    }
    return content
  } catch (e) {
    console.error(e)
    return null
  }
}

function watchFile(filePath: string, callback: () => void) {
  watch(filePath, (eventType) => {
    if (eventType === 'change') {
      callback()
    }
  })
}

// Initial fetch
fetchContent()

// Watch for changes and re-fetch content
watchFile('./src/data/content.json', fetchContent)
