/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //loop through leftBuy pointer, rightSell pointer, return maxProfit
  let left = 0;
  let maxProfit = 0;

  for (let right = 1; right < prices.length; right++) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];

      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
  }
  return maxProfit;
};

module.exports = maxProfit;

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));

const noprice = [7, 6, 4, 3, 1];
console.log(maxProfit(noprice));
