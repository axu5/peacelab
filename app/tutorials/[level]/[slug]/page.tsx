import Markdown from "markdown-to-jsx";
import getMarkdownMetadata from "@/helpers/getPostMetadata";
import getMarkdownContent from "@/helpers/getPostContent";

export const generateStaticParams = async () => {
    const tutorials = getMarkdownMetadata();
    return tutorials.map(metadata => {
        return {
            slug: metadata.slug,
            level: metadata.level,
        };
    });
};

export default function PostPage(props: any) {
    const { level, slug } = props.params;
    const tutorial = getMarkdownContent(level, slug);
    return (
        <div>
            <div className='my-12 text-center'>
                <h1 className='text-2xl text-slate-600 '>
                    {tutorial.data.title}
                </h1>
                <p className='text-slate-400 mt-2'>
                    {tutorial.data.date}
                </p>
            </div>

            <article className='prose'>
                <Markdown>{tutorial.content}</Markdown>
            </article>
        </div>
    );
}
