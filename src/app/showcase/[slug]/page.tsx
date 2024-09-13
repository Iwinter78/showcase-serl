import { IContent } from "@/types/content";
import slugify from "@/utils/generateSlug";
import { fetchContent } from "@/data";
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button";

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const fetchArticle = await fetchContent();

    if (!fetchArticle) return <h1>Article not found</h1>;

    const article = fetchArticle.find((article: IContent) => slugify(article.title) === slug);

    if (!article) return <h1>Article not found</h1>;
    
    return (
        <div className="flex justify-center ">
            <div className="flex text-center justify-center flex-col">
                <strong>
                    <h1 className="text-6xl">{article.title}</h1>
                    <p className="text-center py-14">{article.description}</p>
                </strong>
                <article className="mx-auto w-3/6">
                    <p className="text-center">{article.content}</p>
                    <Link href={article.url} className={`${buttonVariants({ variant: "outline" })} w-full mt-3 `}>Link to project site</Link>
                </article>
            </div>
        </div>
    )
}