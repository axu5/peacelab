import getMarkdownMetadata from "../helpers/getPostMetadata";
import MarkdownPreview from "../components/MarkdownPreview";

const HomePage = () => {
    const postMetadata = getMarkdownMetadata();
    const postPreviews = postMetadata.map(post => (
        <MarkdownPreview key={post.slug} {...post} />
    ));

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {postPreviews}
        </div>
    );
};

export default HomePage;
