import { IContent } from '@/types/content'
import slugify from '@/utils/generateSlug'
import { fetchContent } from '@/data'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import Settings from '@/components/settings'
import Slideshow from '@/components/slideshow'

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params

  const fetchArticle = await fetchContent()

  if (!fetchArticle) return <h1>Article not found</h1>

  const article = fetchArticle.find(
    (article: IContent) => slugify(article.title) === slug
  )

  if (!article) return <h1>Article not found</h1>

  return (
    <>
      <Settings article={article} />
      <div className='flex justify-center '>
        <div className='flex flex-col justify-center text-center'>
          <strong>
            <h1 className='text-6xl'>{article.title}</h1>
          </strong>
          <Slideshow images={article.screenshots} />
          <div className='mx-auto w-3/6'>
            <p className='text-left'>Date of publication: {article.date}</p>
            <p className='py-3 text-center'>{article.description}</p>
          </div>
          <Link
              href={article.url}
              className={`${buttonVariants({ variant: 'outline' })} w-2/6 mx-auto my-4`}
            >
              Link to project site
            </Link>
          <div className='flex justify-center flex-wrap max-w-lg mx-auto'>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className='bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
    </>
  )
}
