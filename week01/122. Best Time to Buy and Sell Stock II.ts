// @ts-ignore
const maxProfit = (prices: number[]): number => {
  let slowPointer = 0;
  let fastPointer = 1;
  let max = 0;
  for (let index = fastPointer; index < prices.length; index++) {
    // console.log(index);
    if (prices[slowPointer] > prices[index]) {
      slowPointer = index;
    } else {
      if (prices[index] > prices[index + 1]) {
        max += prices[index] - prices[slowPointer];
        slowPointer = index + 1;
        index++;
      } else if (index === prices.length - 1) {
        max += prices[index] - prices[slowPointer];
      }
    }
    // console.log(index);
    // console.log(slowPointer);
    // console.log(max);
  }
  //   return max === -1 ? 0 : max;
  return max;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

// console.log(maxProfit([1, 2, 3, 4, 5]));
// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.

console.log(maxProfit([7, 6, 4, 3, 1]));
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
