import Link from "next/link";
import { MarkdownMetadata } from "./MarkdownMetadata";

export default function MarkdownPreview(props: MarkdownMetadata) {
    return (
        <Link
            href={`/tutorials/${props.chapter}/${props.slug}`}
            className='border border-slate-300 p-4 rounded-md shadow-sm
    bg-white'>
            <div>
                <span className='text-sm text-gray-500'>
                    {props.chapter}
                </span>
                <h2 className='text-violet-600 hover:underline my-2'>
                    {props.title}
                </h2>
                <p className='text-slate-700'>{props.subtitle}</p>
            </div>
        </Link>
    );
}
