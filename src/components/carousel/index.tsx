'use client'

import { IContent } from '@/types/content'
import { useEffect, useState } from 'react'
import QrCode from 'react-qr-code'
import Image from 'next/image'
import slugify from '@/utils/generateSlug'

export default function Carousel({
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
    <div className='relative w-full h-screen overflow-y-auto'>
      {fetchArticle.map((article, index) => (
        <div
          key={article.id}
          className={`relative w-full ${index === currentIndex ? '' : 'hidden'}`}
        >
          <div className='flex flex-col items-center min-h-screen'>
            <div className='flex w-3/6 flex-col items-center justify-center flex-grow'>
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
            <div className='mt-auto m-4'>
              <QrCode value={window?.location?.origin + `/showcase/${slugify(article.title)}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
