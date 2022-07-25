type Counter = {[key: string]: number};

function calculateCharCounts(str: string) {
    const counter: Counter = {};

    for (let c of str) {
        if (counter[c]) {
            counter[c]++;
        } else {
            counter[c] = 1;
        }
    }

    return counter;
}

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const countS: Counter = calculateCharCounts(s);
    const countT: Counter = calculateCharCounts(t);

    for (let c in countS) {
        if (countS[c] !== countT[c]) {
            return false;
        }
    }

    return true;
}
