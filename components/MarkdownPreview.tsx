import Link from "next/link";
import { type Lesson } from "../helpers/getLessonMetadata";

export default function MarkdownPreview(props: Lesson) {
    return (
        <Link
            href={props.path}
            className='border border-slate-300 p-4 rounded-md shadow-sm
    bg-white'>
            <div>
                <span className='text-sm text-gray-500'>
                    {props.chapter}
                </span>
                <h2 className='text-violet-600 hover:underline my-2'>
                    {props.lesson}
                </h2>
                <p className='text-slate-700'>{props.subtitle}</p>
            </div>
        </Link>
    );
}
