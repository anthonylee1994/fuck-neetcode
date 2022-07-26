function threeSum(numbers: number[]): number[][] {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const result: number[][] = [];

    for (let i = 0; i < sortedNumbers.length; i++) {
        if (i > 0 && sortedNumbers[i] === sortedNumbers[i - 1]) continue; // skip duplicate

        let l = Number(i) + 1;
        let r = sortedNumbers.length - 1;

        while (l < r) {
            const sum = sortedNumbers[i] + sortedNumbers[l] + sortedNumbers[r];

            if (sum > 0) {
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                result.push([sortedNumbers[i], sortedNumbers[l], sortedNumbers[r]]);
                l++;

                while (sortedNumbers[l] === sortedNumbers[l - 1] && l < r) l++; // skip duplicate
            }
        }
    }

    return result;
}
