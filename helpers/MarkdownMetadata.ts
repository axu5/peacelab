export type MarkdownFileMetadata = {
    title: string;
    subtitle: string;
};

export type MarkdownMetadata = {
    id: string;
    path: string;
    lesson: string;
    chapter: string;
} & MarkdownFileMetadata;