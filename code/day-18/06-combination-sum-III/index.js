// leetcode：https://leetcode.cn/problems/combination-sum-iii/description/
// 代码随想录：https://programmercarl.com/0039.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];
  let path = [];
  function backtracking(target, k, sum, startIndex) {
    if (path.length === k) {
      if (target === sum) {
        result.push(path.slice());
      }
      return;
    }
    // 剪枝 i <= 9 && sum + i <= target
    // 不剪枝 i <= 9
    for (let i = startIndex; i <= 9 && sum + i <= target; i++) {
      path.push(i);
      sum += i;
      backtracking(target, k, sum, i + 1);
      path.pop();
      sum -= i;
    }
  }
  backtracking(n, k, 0, 1);
  return result;
};
