function twoSum(numbers: number[], target: number): number[] {
    const differenceMap: Map<number, number> = new Map();

    for (let index in numbers) {
        const currentNumber = numbers[index];
        if (differenceMap.has(target - currentNumber)) {
            return [Number(index), differenceMap.get(target - currentNumber)!];
        } else {
            differenceMap.set(currentNumber, Number(index));
        }
    }

    return [-1, -1];
}
