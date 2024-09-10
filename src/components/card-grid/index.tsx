'use client'

import { IContent } from '@/types/content'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { useStore } from '@tanstack/react-store'
import { store } from '@/store'
import { searchContent } from '@/search'
import { filterContent } from '@/filter'
import Image from 'next/image'

interface IProps {
  content: IContent[]
}

export default function CardGrid({ content }: IProps) {
  const searchStore = useStore(store)
  return (
    <div className='mx-5 my-10 grid grid-cols-4 gap-4'>
      {content
        .filter((item) => searchContent(item, searchStore.search))
        .filter((item) => filterContent(item, searchStore.filter))
        .map((item) => (
          <div key={item.id} className='container mx-auto text-center'>
            <strong>
              <h1>{item.title}</h1>
            </strong>
            <p className='text-ellipsis'>{item.description}</p>
            <Image
              className='mx-auto'
              width={250}
              height={250}
              src={item.screenshots[0]}
              alt={item.title}
            />
            <Link
              href={item.url}
              className={`${buttonVariants({ variant: 'outline' })} my-5 w-full`}
            >
              Read More
            </Link>
          </div>
        ))}
    </div>
  )
}
