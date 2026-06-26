// leetcode：https://leetcode.cn/problems/maximum-depth-of-binary-tree/
// 代码随想录：https://programmercarl.com/0104.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 递归法，详细写法
  // 1. 确定函数入参和返回值
  function getDepth(root) {
    // 2. 确定递归出口
    if (root === null) {
      return 0;
    }
    // 3. 确定单层递归的逻辑
    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    return 1 + Math.max(leftDepth, rightDepth);
  }
  return getDepth(root);
  // 递归法：简洁写法
  // if (root === null) {
  //     return 0;
  // }
  // return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
