import { type MarkdownMetadata } from "./getLessonMetadata";

export async function getMarkdownMetadataClient(): Promise<
    MarkdownMetadata[]
> {
    const res = await fetch(
        "http://localhost:3000/data/getMarkdownMetadata.json"
    );
    return await res.json();
}
