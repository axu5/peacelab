export type TF = {
    [path: string]: {
        [term: string]: number;
    };
};

export type IDF = {
    [term: string]: number;
};

export type TFIDF = {
    tf: TF;
    idf: IDF;
};

export function filter(x: string): string[] {
    const excludeChars = [
        "\n",
        "\r",
        "[",
        "]",
        "(",
        ")",
        ".",
        ",",
        '"',
        "/",
        "-",
        "#",
        "|",
        "?",
        "~",
        "'",
        "*",
        ">",
        "!",
        "+",
        "=",
        "`",
        ":",
    ].reduce((a, c) => {
        return `\\${c}+|${a}`;
    }, "");
    // TODO: Probably really inefficient but ok for now
    return x
        .toLowerCase()
        .replace(/[0-9]/g, "")
        .replace(new RegExp(excludeChars, "g"), "")
        .split(/ +/g)
        .filter(x => x.length > 1);
}
