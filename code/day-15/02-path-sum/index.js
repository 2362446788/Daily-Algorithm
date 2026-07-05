// leetcode：https://leetcode.cn/problems/path-sum/
// 代码随想录：https://programmercarl.com/0112.%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum1 = function (root, targetSum) {
  if (root === null) {
    return false;
  }
  let result = false;
  // 1. 入参和返回类型
  function recursive(node, num) {
    // 2. 递归出口
    if (node.left === null && node.right === null) {
      if (num + node.val === targetSum) {
        result = true;
      }
      return;
    }
    // 3. 单次递归执行的逻辑
    // 把 num 增加
    num += node.val;
    if (node.left) {
      recursive(node.left, num);
    }
    if (node.right) {
      recursive(node.right, num);
    }
  }
  recursive(root, 0);
  return result;
};

// 迭代法
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  }
  // 前序遍历
  let stack = [root];
  let nums = [0];
  let result = false;
  while (stack.length) {
    let node = stack.pop();
    let num = nums.pop();
    // 遇到叶子节点进行判断
    if (node.left === null && node.right === null) {
      if (num + node.val === targetSum) {
        result = true;
      }
      continue;
    }
    // 增加每个节点的值
    num += node.val;
    if (node.left) {
      stack.push(node.left);
      nums.push(num);
    }
    if (node.right) {
      stack.push(node.right);
      nums.push(num);
    }
  }
  return result;
};
