function topKFrequent(numbers: number[], k: number): number[] {
    const map: Record<number, number> = {};

    for (let num of numbers) {
        if (map[num]) {
            map[num]++;
        } else {
            map[num] = 1;
        }
    }

    const totals = Object.values(map)
        .sort((a, b) => b - a)
        .slice(0, k);

    return Object.entries(map).reduce((acc: number[], [key, value]) => {
        if (totals.includes(value)) {
            return [...acc, Number(key)];
        }
        return acc;
    }, []);
}
