import fs from "fs";
import matter from "gray-matter";

export default function getMarkdownContent(slug: string) {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}
