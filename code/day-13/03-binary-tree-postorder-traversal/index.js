// leetcode：https://leetcode.cn/problems/binary-tree-postorder-traversal/
// 代码随想录：https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86.html#%E6%80%9D%E8%B7%AF
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {TreeNode|null} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  // 后序遍历：左右中，调换一下顺序就变成 中右左，然后和 中左右 就只是后面两个的不同，那就可以借助前序遍历的算法中的实现，把左右子树的顺序掉换一下即可
  const result = [];
  if (root === null) {
    return result;
  }
  const stack = [];
  let cur;
  stack.push(root);
  while (stack.length) {
    cur = stack.pop();
    result.push(cur.val);
    // 先压入左子树
    if (cur.left) {
      stack.push(cur.left);
    }
    // 再压入右子树
    if (cur.right) {
      stack.push(cur.right);
    }
  }
  // 现在的 result 是 中右左 的格式，需要翻转一下变成 左右中 的格式
  return result.reverse();
};
// 递归法
var postorderTraversal1 = function (root) {
  // 使用递归，先判断递归出口
  if (root === null) {
    return [];
  }
  // 前序遍历为：左右中
  return [
    ...postorderTraversal(root.left),
    ...postorderTraversal(root.right),
    root.val,
  ];
};
