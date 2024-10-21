import * as React from 'react'
import { fetchContent } from '@/data'
import CardGrid from '@/components/card-grid'

export default async function Home() {
  let content = await fetchContent()

  if (!content) {
    return null
  }
  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <CardGrid content={content} />
    </React.Suspense>
  )
}
