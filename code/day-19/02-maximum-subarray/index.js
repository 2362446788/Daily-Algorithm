// leetcode：https://leetcode.cn/problems/maximum-subarray/
// 代码随想录：https://programmercarl.com/0053.%E6%9C%80%E5%A4%A7%E5%AD%90%E5%BA%8F%E5%92%8C.html
// 时间复杂度：TODO
// 空间复杂度：TODO
// 贪心算法
// 记录前面的连续和，如果连续和是负数，那么负数加一个数会更小，就应该把这个连续和丢掉，以下一个数为连续和再开始累加
var maxSubArray = function (nums) {
  let result = -Infinity;
  let sum = 0;
  // 题目没要求下标，但是这里可以记录一下
  let start = 0;
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    // 累加连续和
    sum += nums[i];
    if (sum > result) {
      result = sum;
      end = i;
    }
    // 如果连续和是负数，那么直接舍弃，以下一次数据为连续和
    if (sum < 0) {
      sum = 0;
      start = i + 1;
    }
  }
  // start 和 end 是连续子数组的下标
  console.log([start, end]);
  return result;
};
