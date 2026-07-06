// leetcode：https://leetcode.cn/problems/combination-sum/
// 代码随想录：https://programmercarl.com/0039.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 使用组合的模版
var combinationSum = function (candidates, target) {
  let result = [];
  let path = [];
  // 剪枝：使用排序之后然后在 for 循环增加判断，如果当前值加上 sum 已经大于 target，那么后续也不需要再递归下去了
  // 剪枝@1 升序排序数组
  candidates = candidates.sort((a, b) => a - b);
  // 增加 sum 来计算是否结果相等
  function backtracking(candidates, target, sum, startIndex) {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      result.push(path.slice());
      return;
    }
    // 剪枝@2 i < candidates.length && sum + candidates[i] <= target
    // 不剪枝：i < candidates.length
    for (
      let i = startIndex;
      i < candidates.length && sum + candidates[i] <= target;
      i++
    ) {
      path.push(candidates[i]);
      sum += candidates[i];
      // 因为单次递归下去可以重复查找数据，所以 startIndex 使用 i 而不是 i + 1
      backtracking(candidates, target, sum, i);
      // 回溯操作
      path.pop();
      sum -= candidates[i];
    }
  }
  backtracking(candidates, target, 0, 0);
  return result;
};
