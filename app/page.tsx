import getMarkdownMetadata from "../helpers/getPostMetadata";
import MarkdownPreview from "../components/MarkdownPreview";

const HomePage = () => {
    const postMetadata = getMarkdownMetadata();
    const lessonPreview = postMetadata.map(lesson => (
        <MarkdownPreview
            key={`${lesson.chapter}-${lesson.slug}`}
            {...lesson}
        />
    ));

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {lessonPreview}
        </div>
    );
};

export default HomePage;
