// leetcode：https://leetcode.cn/problems/binary-tree-paths/
// 代码随想录：https://programmercarl.com/0257.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%89%80%E6%9C%89%E8%B7%AF%E5%BE%84.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// 使用递归
// 思路
// 递归保存每一次获取的 node 节点的值并且加上 ->
// 递归出口：找到叶子节点就结束，然后构造结果 path 添加到结果中
// 每次递归的逻辑就是构造 path，并且把左右子树进行递归执行
var binaryTreePaths1 = function (root) {
  // 结果
  let result = [];
  // 递归三部曲
  // 1. 入参和返回值
  function getPath(node, path) {
    // 2. 递归出口
    // 找到叶子节点就结束
    if (node.left === null && node.right === null) {
      path += node.val;
      result.push(path);
      return;
    }
    // 3. 单次递归逻辑
    // 加上每一次节点的路径
    path += node.val + "->";
    // 递归左右子树
    if (node.left) {
      getPath(node.left, path);
    }
    if (node.right) {
      getPath(node.right, path);
    }
  }
  getPath(root, "");
  return result;
};

var binaryTreePaths = function (root) {
  if (root === null) {
    return [];
  }
  // 前序遍历的迭代法
  let stack = [root];
  // 每次遍历的字符串结果
  let paths = [""];
  // 最终的结果
  let result = [];
  while (stack.length) {
    let node = stack.pop();
    let path = paths.pop();
    // 到了叶子节点就将 path 构造，然后添加到 result 中
    if (node.left === null && node.right === null) {
      // 加上这个叶子节点的值
      let newPath = path + node.val;
      result.push(newPath);
      continue;
    }
    path += node.val + "->";
    if (node.right) {
      stack.push(node.right);
      paths.push(path);
    }
    if (node.left) {
      stack.push(node.left);
      paths.push(path);
    }
  }
  return result;
};
