'use client';

import { IContent } from "@/types/content";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Carusell({ fetchArticle }: { fetchArticle: IContent[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (fetchArticle.length === 0) {
        return <h1>Article not found</h1>;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % fetchArticle.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [fetchArticle.length]);

    return (
        <div className="relative w-full h-96">
            {fetchArticle.map((article, index) => (
                <div
                    key={article.id}
                    className={`absolute w-full h-full ${
                        index === currentIndex ? "" : "hidden"
                    }`}
                >
                    <div className="flex justify-center">
                        <div className="flex justify-center items-center flex-col h-full w-3/6">
                            <h1 className="text-6xl"><strong>{article.title}</strong></h1>
                            <Image
                                className="m-5 mx-auto"
                                width={300}
                                height={300}
                                src={article.screenshots[0]}
                                alt={article.title}
                            />
                            <p className="py-3 text-center">{article.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}