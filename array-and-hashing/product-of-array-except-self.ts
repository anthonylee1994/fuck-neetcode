function productExceptSelf(numbers: number[]): number[] {
    const prefixProducts: number[] = [];
    const postfixProducts: number[] = [];

    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < numbers.length; i++) {
        prefixProducts[i] = prefix;
        prefix = prefixProducts[i] * numbers[i];
    }

    for (let i = numbers.length - 1; i >= 0; i--) {
        postfixProducts[i] = postfix;
        postfix = postfixProducts[i] * numbers[i];
    }

    return numbers.map((_, i) => prefixProducts[i] * postfixProducts[i]);
}
