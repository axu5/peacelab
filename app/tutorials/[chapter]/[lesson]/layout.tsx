import cn from "@/helpers/cn";
import getMarkdownMetadata from "@/helpers/getLessonMetadata";
import Link from "next/link";
import { type ReactNode } from "react";

// TODO: Never nester in me is crying
export default function LessonLayout({
    params,
    children,
}: {
    params: any;
    children: ReactNode;
}) {
    const { chapter, lesson } = params;
    const allChapters = getMarkdownMetadata();

    return (
        <>
            <aside className='w-full items-center bg-slate-100 xl:min-w-[calc((100%-42rem)*0.5)] xl:mx-5 xl:flex xl:h-screen xl:bg-white xl:w-60 xl:absolute xl:top-0 xl:left-0'>
                <nav className='bg-slate-100 rounded p-5 xl:px-[calc((100%-42rem)*0.25)] '>
                    <ul>
                        {allChapters.map(_chapter => {
                            return (
                                <div>
                                    <div className='w-full flex'>
                                        <span className='lg:mx-auto'>
                                            {_chapter[0].chapter}
                                        </span>
                                    </div>
                                    {_chapter.map(metadata => {
                                        const thisLesson =
                                            lesson ===
                                            metadata.lesson;
                                        const thisChapter =
                                            chapter ===
                                            metadata.chapter;
                                        return (
                                            <li
                                                className='m-2'
                                                key={metadata.id}>
                                                <Link
                                                    href={
                                                        metadata.path
                                                    }
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
                                                    {metadata.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </ul>
                </nav>
            </aside>
            {children}
        </>
    );
}
