// leetcode：https://leetcode.cn/problems/invert-binary-tree/
// 代码随想录：https://programmercarl.com/0226.%E7%BF%BB%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
//我们先定义节点交换函数
const invertNode = function (root) {
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
};
var invertTree = function (root) {
  // 前序遍历
  if (root === null) {
    return root;
  }
  const stack = [];
  let cur;
  stack.push(root);
  while (stack.length) {
    cur = stack.pop();
    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }
    invertNode(cur);
  }
  return root;

  // 递归
  // if (root === null) {
  //     return root;
  // }
  // // 前序遍历：中左右
  // // 中
  // const tempNode = root.left;
  // root.left = root.right;
  // root.right = tempNode;
  // // 左
  // invertTree(root.left);
  // // 右
  // invertTree(root.right);
  // return root;

  // // 后序遍历：左右中
  // // 左
  // invertTree(root.left);
  // // 右
  // invertTree(root.right);
  // // 中
  // const tempNode = root.left;
  // root.left = root.right;
  // root.right = tempNode;
  // return root;
};
