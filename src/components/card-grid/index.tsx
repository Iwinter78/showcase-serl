'use client'

import { IContent } from '@/types/content'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
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

  const filteredContent = content
    .filter((item) => searchContent(item, searchStore.search))
    .filter((item) => filterContent(item, searchStore.filter))

  const filteredContentCount = filteredContent.length

  return (
    <div className='mx-5 my-10'>
      <p>Results: {filteredContentCount}</p>
      <div className='grid grid-cols-3 gap-3'>
        {filteredContent.map((item) => (
          <div key={item.id} className='container mx-auto text-center'>
            <strong>
              <h1>{item.title}</h1>
            </strong>
            <p className='line-clamp-4'>{item.description}</p>
            <Image
              className='mx-auto'
              width={250}
              height={250}
              src={item.screenshots[0]}
              alt={item.title}
            />
            <Link
              href={`/showcase/${slugify(item.title)}`}
              className={`${buttonVariants({ variant: 'outline' })} my-5 w-3/4`}
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}