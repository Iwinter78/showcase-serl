'use client'

import { IContent } from '@/types/content'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useStore } from '@tanstack/react-store'
import { store } from '@/store'
import { searchContent } from '@/search'
import { filterContent } from '@/filter'
import Image from 'next/image'
import slugify from '@/utils/generateSlug'

interface IProps {
  content: IContent[]
}

export default function CardGrid({ content }: IProps) {
  const searchStore = useStore(store)

  const sortedContent = content.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const filteredContent = sortedContent
    .filter((item) => searchContent(item, searchStore.search))
    .filter((item) => filterContent(item, searchStore.filter))

  const filteredContentCount = filteredContent.length

  return (
    <div className='mx-5 my-10'>
      <p>Results: {filteredContentCount}</p>
      <div className='grid grid-cols-3 gap-14'>
        {filteredContent.map((item) => (
          <Link key={item.id} href={`/showcase/${slugify(item.title)}`}>
            <div
              key={item.id}
              className='container mx-auto flex h-96 flex-col justify-between text-center'
            >
              <div className='flex-grow overflow-hidden'>
                <strong>
                  <h1>{item.title}</h1>
                </strong>
                <p className='line-clamp-4'>{item.description}</p>
                <div className='relative h-56 w-full'>
                  <Image
                    className='object-contain'
                    layout='fill'
                    src={item.screenshots[0]}
                    alt={item.title}
                  />
                </div>
              </div>
              <Button className='mt-1.5' variant='outline'>
                Read More
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
