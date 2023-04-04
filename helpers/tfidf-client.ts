import { Lesson } from "./getLessonMetadata";
import { filter, TFIDF } from "./tfidf-shared";

export async function search(searchTerm: string): Promise<Lesson[]> {
    const filteredTerm = filter(searchTerm);

    const tfIdfResponse = await fetch(
        "http://localhost:3000/data/tfidf.json"
    );

    // could save to memory
    const tfIdf = (await tfIdfResponse.json()) as TFIDF;

    const paths = Object.keys(tfIdf.tf);
    // for each term get similarity
    const similarity = [] as number[][];

    let i = 0;
    for (const term of filteredTerm) {
        // for each term
        similarity.push([]);
        for (const path of paths) {
            // get tf
            const tf = tfIdf.tf[path][term] || 0;
            const idf = tfIdf.idf[term];
            // console.table([
            //     ["path", "term", "tf", "idf", "tf/idf"],
            //     [path, term, tf, idf, tf / idf],
            // ]);
            // get similarity of path
            similarity[i].push(tf / idf);
        }
        ++i;
    }

    // rank by relevancy
    let similarityToPath = {} as {
        [k: string]: number;
    };

    // add search terms together
    for (let col = 0; col < paths.length; ++col) {
        const path = paths[col];
        for (let row = 0; row < filteredTerm.length; ++row) {
            if (!similarityToPath[path]) similarityToPath[path] = 0;
            similarityToPath[path] += similarity[row][col];
        }
    }

    const sorted = paths.sort((path1, path2) => {
        const sim1 = similarityToPath[path1];
        const sim2 = similarityToPath[path2];
        return sim2 - sim1;
    });

    const getMarkdownMetadataResponse = await fetch(
        "http://localhost:3000/data/getMarkdownMetadata.json"
    );
    const allChapters = await getMarkdownMetadataResponse.json();

    return sorted.map(id => {
        let lessonInfo: Lesson | null = null;
        outer: for (const chapter of allChapters) {
            for (const lesson of chapter.lessons) {
                if (id === lesson.id) {
                    lessonInfo = lesson;
                    break outer;
                }
            }
        }

        if (lessonInfo === null) {
            throw new Error("Unexpected: lessonInfo is null");
        }

        return lessonInfo;
    });
}
