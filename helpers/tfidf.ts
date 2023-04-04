import { tfIdfLocation } from "@/constants/tfidf";
import fs from "fs";
import { filter, TFIDF } from "./tfidf-shared";

type TF_INTERNAL = Map<string, Map<string, number>>;
type IDF_INTERNAL = Map<string, number>;
type TFIDF_INTERNAL = {
    tf: TF_INTERNAL;
    idf: IDF_INTERNAL;
};

export function newTFIDF(): TFIDF_INTERNAL {
    return {
        tf: new Map<string, Map<string, number>>(),
        idf: new Map<string, number>(),
    };
}

export function saveTFIDF(tf: TF_INTERNAL, idf: IDF_INTERNAL) {
    // save tf-idf as JSON
    const obj = {
        tf: Object.fromEntries(
            Array.from(tf).map(([path, tf]) => {
                return [path, Object.fromEntries(tf)];
            })
        ),
        idf: Object.fromEntries(idf),
    } satisfies TFIDF;

    console.log("SAVING TF IDF");
    fs.writeFileSync(tfIdfLocation, JSON.stringify(obj, null, 2));
}

export function addToTFIDF(
    tf: TF_INTERNAL,
    idf: IDF_INTERNAL,
    key: string,
    ...args: string[]
) {
    const thingToAdd = args.join(" ");

    const terms = filter(thingToAdd);

    // TODO: Add stemming
    for (const term of terms) {
        // Not undefined assertion
        const idfFreq = (idf.has(term) ? idf.get(term) : 0) as number;
        idf.set(term, idfFreq + 1);

        if (!tf.has(key)) {
            tf.set(key, new Map<string, number>());
        }

        const tfFreqMap = tf.get(key) || new Map<string, number>();
        // Not undefined assertion
        const prev = (
            tfFreqMap.has(term) ? tfFreqMap.get(term) : 0
        ) as number;
        tfFreqMap.set(term, prev + 1);
        tf.set(key, tfFreqMap);
    }
}
