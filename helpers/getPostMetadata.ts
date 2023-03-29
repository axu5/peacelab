import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MarkdownMetadata } from "./MarkdownMetadata";
import { folderLocation } from "@/constants/tutorial";

export default function getMarkdownMetadata(): MarkdownMetadata[] {
    const chapters = fs.readdirSync(folderLocation);

    // Get gray-matter data from each file.
    const paths = chapters.flatMap(chapter => {
        const lessons = fs.readdirSync(
            path.join(folderLocation, chapter)
        );
        return lessons.map(fileName => {
            const filePath = `${folderLocation}/${chapter}/${fileName}`;
            const fileContents = fs.readFileSync(filePath, "utf8");
            const matterResult = matter(fileContents);
            const slug = fileName.replace(".md", "");
            return {
                id: slug,
                title: matterResult.data.title,
                subtitle: matterResult.data.subtitle,
                path: chapter + "/" + slug,
                slug,
                chapter,
            } satisfies MarkdownMetadata;
        });
    });

    return paths;
}
