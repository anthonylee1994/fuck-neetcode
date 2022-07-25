function containsDuplicate(numbers: number[]): boolean {
    const set = new Set();

    for (let num of numbers) {
        if (set.has(num)) return true;
        set.add(num);
    }

    return false;
}
