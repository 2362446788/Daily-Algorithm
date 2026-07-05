// leetcode：https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/
// 代码随想录：https://programmercarl.com/0236.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 思路
// 使用递归回溯的方法处理
// 递归三部曲
// 1. 入参和返回值
//    root, p, q
// 2. 递归出口
//    root === null 返回 root
//    root === p || root === q 返回 root
// 3. 单次递归的逻辑
//    后序遍历 左右中，分别计算左右子树的结果再来判断
//    - 左右都不为空，那么当前 root 就是最近公共祖先
//    - 左为空右不为空返回右节点
//    - 左不为空右为空返回左节点
//    - 都为空返回 null
var lowestCommonAncestor = function (root, p, q) {
  function recursive(root, p, q) {
    if (root === null) {
      return root;
    }
    if (root === p || root === q) {
      return root;
    }
    // 后序遍历 左右中
    let leftNode = recursive(root.left, p, q);
    let rightNode = recursive(root.right, p, q);
    // 中的处理
    if (leftNode !== null && rightNode !== null) {
      return root;
    } else if (leftNode === null && rightNode !== null) {
      return rightNode;
    } else if (leftNode !== null && rightNode === null) {
      return leftNode;
    } else {
      return null;
    }
  }
  return recursive(root, p, q);
};
