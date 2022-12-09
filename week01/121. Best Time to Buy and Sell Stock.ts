// @ts-ignore
const maxProfit = (prices: number[]): number => {
  let slowPointer = 0;
  let fastPointer = 1;
  let max = -1;
  for (let index = fastPointer; index < prices.length; index++) {
    if (prices[slowPointer] > prices[index]) {
      slowPointer = index;
    } else {
      max = Math.max(prices[index] - prices[slowPointer], max);
    }
  }
  return max === -1 ? 0 : max;
};
// [2,1,2,1,0,1,2]
// console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
// expected 2, got 1

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// console.log(maxProfit([7, 6, 4, 3, 1]));
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
