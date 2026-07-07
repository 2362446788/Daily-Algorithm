// leetcode：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
// 代码随想录：https://programmercarl.com/0121.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {number[]} prices
 * @return {number}
 */
// 动态规划
var maxProfit = function (prices) {
  // 1. dp数组及下标：使用二维数组
  //    dp[i][0]：表示第i天持有股票的最大现金
  //    dp[i][1]：表示第i天不持有股票的最大现金
  // 2. 递推公式：
  //    dp[i][0]：max(dp[i-1][0], -prices[i])，可以是继续保持i-1天的持有股票状态，也可以是今天新买入的股票，两者取最大值，因为是最大现金
  //    dp[i][1]：max(dp[i-1][1], dp[i-1][0]+prices[i])，可以是继续保持i-1天的不持有股票状态，也可以是i-1天持有股票，但是今天卖出，两者取最大值，因为是最大现金
  // 3. dp数组初始化：dp[0][0] = -prices[0]; dp[0][1] = 0;
  // 4. 遍历顺序：从左到右，从i=1开始
  let len = prices.length;
  let dp = new Array(len).fill([0, 0]);
  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }
  return dp[len - 1][1];
};
// 贪心算法
var maxProfit1 = function (prices) {
  // 维护左边的最小价格
  let lowerPrice = prices[0];
  // 利润
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    lowerPrice = Math.min(lowerPrice, prices[i]);
    // 当天卖出的价格和最小价格计算得出利润，然后更新到最大利润
    result = Math.max(result, prices[i] - lowerPrice);
  }
  return result;
};
// 暴力算法：会超时
var maxProfit2 = function (prices) {
  let target = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        let diff = prices[j] - prices[i];
        if (diff > target) {
          target = diff;
        }
      }
    }
  }
  return target;
};
