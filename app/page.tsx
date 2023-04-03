import getMarkdownMetadata from "../helpers/getLessonMetadata";
import MarkdownPreview from "../components/MarkdownPreview";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "PeaceLab Tutorials",
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const HomePage = () => {
    const allChapters = getMarkdownMetadata();
    const lessonPreview = allChapters.flatMap(chapter => {
        return (
            <div key={chapter.key}>
                <span className=''>{chapter.name}</span>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {chapter.lessons.map(lesson => (
                        <MarkdownPreview
                            key={lesson.id}
                            {...lesson}
                        />
                    ))}
                </div>
            </div>
        );
    });

    return lessonPreview;
};

export default HomePage;
