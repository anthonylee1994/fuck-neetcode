function sorted(str: string) {
    return str.split("").sort().join("");
}

function groupAnagrams(strs: string[]): string[][] {
    const map: Record<string, string[]> = {};

    for (let str of strs) {
        const sortedStr = sorted(str);

        if (!map[sortedStr]) {
            map[sortedStr] = [];
        }

        map[sortedStr].push(str);
    }

    return Object.values(map);
}
