function longestConsecutive(numbers: number[]): number {
    const numSet = new Set<number>(numbers);
    let longest = 0;

    for (let num of numbers) {
        if (!numSet.has(num - 1)) {
            let length = 1;
            while (numSet.has(num + length)) length++;
            longest = Math.max(length, longest);
        }
    }

    return longest;
}
