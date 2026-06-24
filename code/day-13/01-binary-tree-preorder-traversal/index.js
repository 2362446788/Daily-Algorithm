// leetcode：https://leetcode.cn/problems/binary-tree-preorder-traversal/
// 代码随想录：https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86.html#%E6%80%9D%E8%B7%AF
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {TreeNode|null} root
 * @return {number[]}
 */
// 迭代法
var preorderTraversal = function (root) {
  // 使用迭代法实现
  const result = [];
  if (root === null) {
    return result;
  }
  // 使用栈来保存数据
  const stack = [];
  // 循环找到的 node
  let cur;
  // 把 root 压入栈中
  stack.push(root);
  // 因为前序遍历是 中左右，所以先把中间的值取出来，然后再把子树按照 右 -> 左 的方式压入栈，这样取的时候会先取出左子树的值
  while (stack.length) {
    // 弹出中间的值
    cur = stack.pop();
    // 把值记录到结果中
    result.push(cur.val);
    // 先压入右子树
    if (cur.right) {
      stack.push(cur.right);
    }
    // 再压入左子树
    if (cur.left) {
      stack.push(cur.left);
    }
  }
  return result;
};
// 递归法
var preorderTraversal1 = function (root) {
  // 使用递归，先判断递归出口
  if (root === null) {
    return [];
  }
  // 前序遍历为：中左右
  return [
    root.val,
    ...preorderTraversal(root.left),
    ...preorderTraversal(root.right),
  ];
};
