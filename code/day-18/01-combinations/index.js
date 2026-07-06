// leetcode：https://leetcode.cn/problems/combinations/
// 代码随想录：https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // 回溯算法的三部曲
  // 1. 递归函数参数和返回值
  // 2. 递归出口
  // 3. 单层遍历执行的操作
  let result = [];
  let paths = [];
  // startIndex 是让每一次递归从下一个数开始查找，因为这是组合问题，不是排列问题 [1, 2] 和 [2, 1] 是一样的
  function backtracking(n, k, startIndex) {
    if (paths.length === k) {
      result.push(paths.slice());
      return;
    }
    // 循环本层集合元素
    // for (let i = startIndex; i <= n; i++) {
    //     paths.push(i);
    //     backtracking(n, k, i + 1);
    //     // 回溯操作
    //     paths.pop();
    // }
    // 剪枝操作
    // i <= n - (k - paths.length) + 1
    // k - paths.length 表示还需要多少个数
    // n - (k - paths.length) + 1 表示至多可以遍历到这里，后续的遍历都没办法获取到符合条件的数据
    for (let i = startIndex; i <= n - (k - paths.length) + 1; i++) {
      paths.push(i);
      backtracking(n, k, i + 1);
      // 回溯操作
      paths.pop();
    }
  }
  backtracking(n, k, 1);
  return result;
};
