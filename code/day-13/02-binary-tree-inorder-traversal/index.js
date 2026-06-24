// leetcode：https://leetcode.cn/problems/binary-tree-inorder-traversal/
// 代码随想录：https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86.html#%E6%80%9D%E8%B7%AF
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {TreeNode|null} root
 * @return {number[]}
 */
// 迭代法
var inorderTraversal = function (root) {
  // 因为访问的节点和需要处理的节点不同，所以没办法像前序遍历那样简单
  // 需要增加一个指针来决定访问的值
  const result = [];
  if (root === null) {
    return result;
  }
  const stack = [];
  let node = root;
  while (node !== null || stack.length) {
    // 如果指针 node 不为 null，那么就依次找左子树压入栈中
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      // 如果左子树找完了，那么就可以取栈中的左子树的值来处理
      node = stack.pop();
      result.push(node.val);
      // 找到左边的值，接着开始找右边的值
      node = node.right;
    }
  }
  return result;
};
// 递归法
var inorderTraversal1 = function (root) {
  // 使用递归，先判断递归出口
  if (root === null) {
    return [];
  }
  // 前序遍历为：左中右
  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
};
