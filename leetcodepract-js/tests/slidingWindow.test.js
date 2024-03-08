const maxProfit = require("../01problems/slidingWindow121");

describe("slidingWindow", () => {
  let prices;
  it("it should return the max profit 5.", () => {
    prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toEqual(5);
  });
  it("should return max profit 0. There is no max profit in this array", () => {
    prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toEqual(0);
  });
});
