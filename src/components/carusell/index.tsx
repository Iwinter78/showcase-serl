'use client'

import { IContent } from '@/types/content'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Carusell({
  fetchArticle,
}: {
  fetchArticle: IContent[]
}) {
  const [currentIndex, setCurrentIndex] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % fetchArticle.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [fetchArticle.length])

  if (fetchArticle.length === 0) {
    return <h1>Article not found</h1>
  }

  return (
    <div className='relative h-96 w-full'>
      {fetchArticle.map((article, index) => (
        <div
          key={article.id}
          className={`absolute h-full w-full ${
            index === currentIndex ? '' : 'hidden'
          }`}
        >
          <div className='flex justify-center'>
            <div className='flex h-full w-3/6 flex-col items-center justify-center'>
              <h1 className='text-6xl'>
                <strong>{article.title}</strong>
              </h1>
              <Image
                className='m-5 mx-auto'
                width={300}
                height={300}
                src={article.screenshots[0]}
                alt={article.title}
              />
              <p className='py-3 text-center'>{article.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
