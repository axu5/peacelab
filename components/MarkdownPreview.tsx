import Link from "next/link";
import { MarkdownMetadata } from "./MarkdownMetadata";

export default function MarkdownPreview(props: MarkdownMetadata) {
    return (
        <div
            className='border border-slate-300 p-4 rounded-md shadow-sm
    bg-white'>
            <Link href={`/tutorials/${props.slug}`}>
                <h2 className=' text-violet-600 hover:underline mb-4'>
                    {props.title}
                </h2>
            </Link>
            <p className='text-slate-700'>{props.subtitle}</p>
        </div>
    );
}
