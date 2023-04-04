import { type MarkdownMetadata } from "./getLessonMetadata";

export async function getMarkdownMetadataClient(): Promise<
    MarkdownMetadata[]
> {
    const res = await fetch("/data/getMarkdownMetadata.json");
    return await res.json();
}
