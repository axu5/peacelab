import Markdown from "markdown-to-jsx";
import getMarkdownMetadata from "@/helpers/getPostMetadata";
import getMarkdownContent from "@/helpers/getPostContent";

export const generateStaticParams = async () => {
    const posts = getMarkdownMetadata();
    return posts.map(post => ({
        slug: post.slug,
    }));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getMarkdownContent(slug);
    return (
        <div>
            <div className='my-12 text-center'>
                <h1 className='text-2xl text-slate-600 '>
                    {post.data.title}
                </h1>
                <p className='text-slate-400 mt-2'>
                    {post.data.date}
                </p>
            </div>

            <article className='prose'>
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;
