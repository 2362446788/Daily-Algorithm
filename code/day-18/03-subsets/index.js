// leetcode：https://leetcode.cn/problems/subsets/
// 代码随想录：https://programmercarl.com/0078.%E5%AD%90%E9%9B%86.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  let path = [];
  function backtracking(nums, startIndex) {
    result.push(path.slice());
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  }
  backtracking(nums, 0);
  return result;
};

// 子集II
// leetcode：https://leetcode.cn/problems/subsets-ii/
// 代码随想录：https://programmercarl.com/0090.%E5%AD%90%E9%9B%86II.html
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let result = [];
  let path = [];
  nums = nums.sort((a, b) => a - b);
  function backtracking(nums, startIndex) {
    result.push(path.slice());
    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  }
  backtracking(nums, 0);
  return result;
};
