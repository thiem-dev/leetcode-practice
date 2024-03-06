/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //loop through leftBuy pointer, rightSell pointer, return maxProfit
  let left,
    maxProfit = 0;

  for (let right = 1; right < prices.length; right++) {
    if (prices[left] < prices[right]) {
      // 7, 1
      let profit = prices[right] - prices[left];

      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
  }
  return maxProfit;

  //if no profit, negative profit then return 0
};

module.exports = maxProfit;

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
