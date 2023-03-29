export type MarkdownFileMetadata = {
    title: string;
    subtitle: string;
};

export type MarkdownMetadata = {
    id: string;
    path: string;
    slug: string;
    chapter: string;
} & MarkdownFileMetadata;
