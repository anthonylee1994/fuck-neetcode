function twoSum(numbers: number[], target: number): number[] {
    let l = 0;
    let r = numbers.length - 1;
    while (l < r) {
        const current = numbers[l] + numbers[r];
        if (current > target) {
            r--;
        } else if (current < target) {
            l++;
        } else {
            return [l + 1, r + 1];
        }
    }

    throw new Error("fuck you leetcode");
}
