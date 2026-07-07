// leetcode：https://leetcode.cn/problems/climbing-stairs/
// 代码随想录：https://programmercarl.com/0070.%E7%88%AC%E6%A5%BC%E6%A2%AF.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 第1阶：1种 1
  // 第2阶：2种 1 + 1 和 2
  // 第3阶：第2阶+第1阶 = 3，可以从第1阶爬2个台阶到达，也可以从第2阶爬1个台阶到达，即有第1阶+第2阶的方式到达
  // 第4阶：第3阶+第2阶
  // 第i阶：第i-1阶+第i-2阶
  // 1. dp数组及下标的定义：dp[i]表示第i阶有dp[i]中方式
  // 2. 递推公式：dp[i] = dp[i-1]+dp[i-2]
  // 3. dp数组初始化：n >=1 所以从 dp[1] = 1，dp[2] = 2
  // 4. 遍历顺序：从左到右，从i=3开始
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
