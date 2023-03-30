import Markdown from "markdown-to-jsx";
import getMarkdownMetadata from "@/helpers/getLessonMetadata";
import getMarkdownContent from "@/helpers/getLessonContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type PathVariable = {
    lesson: string;
    chapter: string;
};

export const revalidate = false;

export function generateMetadata({
    params,
}: {
    params: PathVariable;
}): Metadata {
    const { chapter, lesson } = decodeURIFromParams(params);
    const response = getMarkdownContent(chapter, lesson);

    if (!response) {
        return notFound();
    }

    const { metadata } = response;

    return {
        title: metadata.title,
        description: metadata.subtitle,
    };
}

export const generateStaticParams = async () => {
    const allLessons = getMarkdownMetadata();
    return allLessons.map(metadata => {
        return encodeURIToParams({
            lesson: metadata.lesson,
            chapter: metadata.chapter,
        } as PathVariable);
    });
};

// TODO: Fix any type, figure out how to infer from generateStaticParams()
export default function PostPage(props: { params: PathVariable }) {
    const { chapter, lesson } = decodeURIFromParams(props.params);
    const response = getMarkdownContent(chapter, lesson);

    if (!response) {
        // Could fail if lesson was created but revalidation
        // hasn't kicked in
        return <>Something went wrong, try again later</>;
    }

    const { metadata, content } = response;

    return (
        <div>
            <div className='my-12 text-center'>
                <span className='text-md text-slate-600 '>
                    {chapter}
                </span>
                <h1 className='text-2xl text-slate-600 '>
                    {metadata.title}
                </h1>
            </div>

            <article className='prose'>
                <Markdown>{content}</Markdown>
            </article>
        </div>
    );
}

function decodeURIFromParams(params: PathVariable): PathVariable {
    for (const [key, value] of Object.entries(params)) {
        const k = key as keyof PathVariable;
        params[k] = value.replaceAll("-", " ");
    }

    return params;
}

function encodeURIToParams(object: PathVariable): PathVariable {
    for (const [key, value] of Object.entries(object)) {
        const k = key as keyof PathVariable;
        object[k] = value.replaceAll(" ", "-");
    }

    return object;
}
