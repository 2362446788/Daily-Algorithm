// leetcode：https://leetcode.cn/problems/permutations/
// 代码随想录：https://programmercarl.com/0046.%E5%85%A8%E6%8E%92%E5%88%97.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let path = [];
  // 使用一个used数组来标识哪个值被使用了（树枝节点）
  function backtracking(nums, used) {
    // 收集的长度等于原始数组的长度就说明收集好了，需要加入到 result 中
    if (path.length === nums.length) {
      // 因为 path 是一个引用地址，需要将其复制出来，不然结果中使用的都是同一个引用地址
      result.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // 判断是否被使用过了
      if (used[i]) {
        continue;
      }
      used[i] = true;
      path.push(nums[i]);
      backtracking(nums, used);
      // 回溯
      used[i] = false;
      path.pop();
    }
  }
  backtracking(nums, []);
  return result;
};
