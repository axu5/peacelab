import Markdown from "markdown-to-jsx";
import getMarkdownMetadata from "@/helpers/getPostMetadata";
import getMarkdownContent from "@/helpers/getPostContent";

type PathVariable = {
    lesson: string;
    chapter: string;
};

export const revalidate = 15;

export const generateStaticParams = async () => {
    const allLessons = getMarkdownMetadata();
    return allLessons.map(metadata => {
        return encodeURIToParams({
            lesson: metadata.slug,
            chapter: metadata.chapter,
        } as PathVariable);
    });
};

export function generateMetadata({
    params,
}: {
    params: PathVariable;
}) {
    const { chapter, lesson } = params;
    const { metadata } = getMarkdownContent(chapter, lesson);

    return {
        title: metadata.title,
        description: metadata.subtitle,
    };
}

// TODO: Fix any type, figure out how to infer from generateStaticParams()
export default function PostPage(props: { params: PathVariable }) {
    const { chapter, lesson } = decodeURIFromParams(props.params);
    const { metadata, content } = getMarkdownContent(chapter, lesson);
    return (
        <div>
            <div className='my-12 text-center'>
                <h1 className='text-2xl text-slate-600 '>
                    {metadata.title}
                </h1>
                <p className='text-slate-400 mt-2'>
                    {metadata.chapter}
                </p>
            </div>

            <article className='prose'>
                <Markdown>{content}</Markdown>
            </article>
        </div>
    );
}

function decodeURIFromParams(params: PathVariable): PathVariable {
    for (const [key, value] of Object.entries(params)) {
        const k = key as unknown as keyof PathVariable;
        params[k] = decodeURIComponent(value);
    }

    return params;
}

function encodeURIToParams(object: PathVariable): PathVariable {
    for (const [key, value] of Object.entries(object)) {
        const k = key as unknown as keyof PathVariable;
        object[k] = encodeURIComponent(value);
    }

    return object;
}
