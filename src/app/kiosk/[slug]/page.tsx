import { fetchContent } from '@/data'
import Carousel from '@/components/carousel'
import { IContent } from '@/types/content'
import slugify from '@/utils/generateSlug'

export default async function KioskMode({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  const fetchArticle = await fetchContent()

  if (!fetchArticle) return <h1>Article not found</h1>

  if (slug === 'all') {
    return <Carousel fetchArticle={fetchArticle} />
  }

  const article = fetchArticle.find(
    (article: IContent) => slugify(article.title) === slug
  )

  return <Carousel fetchArticle={article ? [article] : []} />
}
