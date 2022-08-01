function maxProfit(prices: number[]): number {
    let bestGain = 0;
    let l = 0;

    for (let r = 1; r < prices.length; r++) {
        if (prices[r] < prices[l]) l = r;
        bestGain = Math.max(bestGain, prices[r] - prices[l]);
    }

    return bestGain;
}
