"use client";

import MarkdownPreview from "@/components/MarkdownPreview";
import { type Lesson } from "@/helpers/getLessonMetadata";
import { search } from "@/helpers/tfidf-client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// next.js decodes it automatically
export default function Search() {
    // const [data, setData] = useState<Lesson[]>([]);
    const [content, setContent] = useState<JSX.Element[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const query = useSearchParams();

    // find from tf-idf
    useEffect(() => {
        setIsLoading(true);
        search(query.toString().replace("q=", ""))
            .then(d => {
                // setData(d);
                setContent(
                    d.map(lesson => {
                        return (
                            <MarkdownPreview
                                key={lesson.id}
                                {...lesson}
                            />
                        );
                    })
                );
            })
            .catch(e => {
                console.error("error", e);
                setError(e);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [query]);

    return !isLoading ? (
        error == "" ? (
            <div className='grid grid-cols-1 gap-4'>{content}</div>
        ) : (
            error
        )
    ) : (
        <>Loading...</>
    );
}
