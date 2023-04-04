import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { folderLocation } from "@/constants/tutorial";
// Order of chapters
const chapterOrder = [
    "Site Navigation",
    "Googling",
    "Editing Documents",
    "Data Management",
    "Cyber Security",
] as const;

// type chapterNamesType = typeof chapterOrder[number];

export type MarkdownFileMetadata = {
    title: string;
    subtitle: string;
};

export type Lesson = {
    id: string;
    path: string;
    lesson: string;
    chapter: typeof chapterOrder[number];
} & MarkdownFileMetadata;

export type MarkdownMetadata = {
    name: string;
    key: number;
    lessons: Lesson[];
};

export default function getMarkdownMetadata(): MarkdownMetadata[] {
    const chapters = fs.readdirSync(folderLocation);
    const order = Object.fromEntries(
        chapterOrder.map((chapterName, i) => [chapterName, i])
    );
    // Get gray-matter data from each file.
    const paths = chapters.map(chapterName => {
        const lessons = fs.readdirSync(
            path.join(folderLocation, chapterName)
        );

        return {
            name: chapterName,
            key: order[chapterName],
            lessons: lessons.map(fileName => {
                const filePath = `${folderLocation}/${chapterName}/${fileName}`;
                const fileContents = fs.readFileSync(
                    filePath,
                    "utf8"
                );
                const { data } = matter(fileContents);
                const lesson = fileName.replace(".md", "");
                return {
                    id: chapterName + "-" + lesson,
                    title: data.title,
                    subtitle: data.subtitle,
                    path: `${folderLocation}/${chapterName}/${lesson}`.replaceAll(
                        " ",
                        "-"
                    ),
                    chapter:
                        chapterName as typeof chapterOrder[number],
                    lesson: lesson,
                } satisfies Lesson;
            }),
        } satisfies MarkdownMetadata;
    });

    const sortedPaths = paths.sort((a, b) => a.key - b.key);
    // write to public data
    fs.writeFileSync(
        "./public/data/getMarkdownMetadata.json",
        JSON.stringify(sortedPaths, null, 2)
    );

    return sortedPaths;
}
