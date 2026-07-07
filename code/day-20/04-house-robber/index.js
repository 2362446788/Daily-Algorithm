// leetcode：https://leetcode.cn/problems/house-robber/
// 代码随想录：https://programmercarl.com/0198.%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8D.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var rob = function (nums) {
  // 1. dp数组及下标：dp[i]，表示i及前面的所有金额的最大金额，可能没有偷i
  // 2. 递推公式：dp[i] = max(dp[i-2]+nums[i], dp[i-1])，偷当前房屋（最大金额就是前前房屋的金额加上当前房屋的金额），不偷当前房屋（最大金额就是前一个房屋的金额）
  // 3. dp数组初始化：dp[0]=nums[0];dp[1]=max(nums[1], dp[0]);
  // 4. 遍历顺序：从左往右遍历
  let dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[1], dp[0]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
};

// 暴力，有些case过不去
var rob = function (nums) {
  let pre = 0;
  let next = 0;
  for (let i = 0; i < nums.length; i = i + 2) {
    pre += nums[i];
    if (i + 1 < nums.length) {
      next += nums[i + 1];
    }
  }
  return Math.max(pre, next);
};
