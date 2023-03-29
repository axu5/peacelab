import fs from "fs";
import matter from "gray-matter";
import { folderLocation } from "@/constants/tutorial";

export default function getMarkdownContent(
    chapter: string,
    lesson: string
) {
    const filePath = `${folderLocation}/${chapter}/${lesson}.md`;
    const file = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(file);
    const { data, ...rest } = matterResult;
    return {
        metadata: data,
        ...rest,
    };
}
