import cn from "@/helpers/cn";
import getMarkdownMetadata from "@/helpers/getLessonMetadata";
import Link from "next/link";
import { type ReactNode } from "react";

export default function LessonLayout({
    params,
    children,
}: {
    params: any;
    children: ReactNode;
}) {
    const { chapter, lesson } = params;
    const allLessons = getMarkdownMetadata();

    return (
        <>
            <aside className='w-full bg-white lg:w-60 lg:absolute lg:top-0 lg:left-0'>
                <nav>
                    <ul>
                        {allLessons.map(lessonMetadata => {
                            const thisLesson =
                                lesson === lessonMetadata.lesson;
                            const thisChapter =
                                chapter === lessonMetadata.chapter;
                            return (
                                <li
                                    className='m-2'
                                    key={lessonMetadata.id}>
                                    <Link
                                        href={lessonMetadata.path}
                                        className={cn(
                                            {
                                                "bg-blue-200":
                                                    thisChapter,
                                                "bg-blue-600":
                                                    thisLesson,
                                                "bg-gray-200":
                                                    !thisChapter &&
                                                    !thisLesson,
                                            },
                                            {
                                                "text-white":
                                                    thisLesson,
                                            },
                                            `flex p-2 rounded hover:bg-blue-400 cursor-pointer`
                                        )}>
                                        {lessonMetadata.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>
            {children}
        </>
    );
}
