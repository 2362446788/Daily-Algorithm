// leetcode：https://leetcode.cn/problems/fibonacci-number/
// 代码随想录：https://programmercarl.com/0509.%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
var fib = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  // 1. dp数组及下标的定义：dp[i] 就是第 i 个斐波那契数的值
  // 2. 递推公式：dp[i] = dp[i - 1] + dp[i - 2]
  // 3. 初始化dp数组：dp[0] = 0，dp[1] = 1
  // 4. 遍历顺序：从左往右，从 i = 2 开始
  let dp = [];
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// 递归版本
var fib1 = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 2) + fib(n - 1);
};
