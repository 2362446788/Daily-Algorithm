// leetcode：https://leetcode.cn/problems/combination-sum-ii/description/
// 代码随想录：https://programmercarl.com/0040.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8CII.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = [];
  let path = [];
  candidates = candidates.sort((a, b) => a - b);
  function backtracking(candidates, target, sum, startIndex) {
    if (sum > target) {
      return;
    }
    if (target === sum) {
      result.push(path.slice());
      return;
    }
    // 剪枝 i < candidates.length && sum + candidates[i] <= target
    // 不剪枝 i < candidates.length
    for (
      let i = startIndex;
      i < candidates.length && sum + candidates[i] <= target;
      i++
    ) {
      // 去重
      // 同一层遍历的下一个元素和前一个元素相同就跳过
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }
      path.push(candidates[i]);
      sum += candidates[i];
      backtracking(candidates, target, sum, i + 1);
      path.pop();
      sum -= candidates[i];
    }
  }
  backtracking(candidates, target, 0, 0);
  return result;
};
