type CharacterCounterMap = {[key: string]: number};

function getCharacterCounterMap(str: string) {
    const counter: CharacterCounterMap = {};

    for (let c of str) {
        if (counter[c]) {
            counter[c]++;
        } else {
            counter[c] = 1;
        }
    }

    return counter;
}

function isEqual(a: CharacterCounterMap, b: CharacterCounterMap) {
    for (let char in a) {
        if (a[char] !== b[char]) {
            return false;
        }
    }

    return true;
}

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const sCharacterCounterMap: CharacterCounterMap = getCharacterCounterMap(s);
    const tCharacterCounterMap: CharacterCounterMap = getCharacterCounterMap(t);

    return isEqual(sCharacterCounterMap, tCharacterCounterMap);
}
