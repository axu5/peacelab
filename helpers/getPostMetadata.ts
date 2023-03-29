import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MarkdownMetadata } from "../components/MarkdownMetadata";
import { folderLocation } from "@/constants/tutorial";

export default function getMarkdownMetadata(): MarkdownMetadata[] {
    const difficulties = fs.readdirSync(folderLocation);

    // Get gray-matter data from each file.
    const paths = difficulties.flatMap(difficulty => {
        const lessons = fs.readdirSync(
            path.join(folderLocation, difficulty)
        );
        return lessons.map(fileName => {
            const fileContents = fs.readFileSync(
                `${folderLocation}/${difficulty}/${fileName}`,
                "utf8"
            );
            const matterResult = matter(fileContents);
            return {
                title: matterResult.data.title,
                subtitle: matterResult.data.subtitle,
                slug: difficulty + "/" + fileName.replace(".md", ""),
                level: difficulty,
            };
        });
    });

    return paths;
}
