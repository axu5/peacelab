import fs from "fs";
import matter from "gray-matter";
import { folderLocation } from "@/constants/tutorial";

export default function getMarkdownContent(
    level: string,
    slug: string
) {
    const filePath = `${folderLocation}/${level}/${slug}.md`;
    const file = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(file);
    return matterResult;
}
