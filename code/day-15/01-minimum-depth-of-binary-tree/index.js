// leetcode：https://leetcode.cn/problems/minimum-depth-of-binary-tree/
// 代码随想录：https://programmercarl.com/0111.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%B0%8F%E6%B7%B1%E5%BA%A6.html
// 时间复杂度：TODO
// 空间复杂度：TODO
// 思路
// 和最大深度的写法差不多，都使用后序遍历 左右中 的方式去递归
// 递归出口是 root === null，返回 0
// 然后求左子树的深度，右子树的深度
// 因为要求的最小深度是跟节点到叶子节点，所以不能直接返回 1 + Math.min(leftDepth, rightDepth)
// 要增加两层判断
// 左子树不为空右子树为空：返回 1 + leftDepth
// 左子树为空右子树不为空：返回 1 + rightDepth
// 两个子树都有值最后才返回 1 + Math.min(leftDepth, rightDepth)
var minDepth = function (root) {
  function getDepth(root) {
    if (root === null) {
      return 0;
    }
    let leftDepth = getDepth(root.left);
    let rightDepth = getDepth(root.right);
    if (root.left !== null && root.right === null) {
      return 1 + leftDepth;
    }
    if (root.left === null && root.right !== null) {
      return 1 + rightDepth;
    }
    return 1 + Math.min(leftDepth, rightDepth);
  }
  return getDepth(root);
};

// 使用层序遍历的模版
// 在左右子树都为空的时候返回
var minDepth1 = function (root) {
  if (root === null) {
    return 0;
  }
  let queue = [root];
  let depth = 0;
  while (queue.length) {
    let length = queue.length;
    depth++;
    for (let i = 0; i < length; i++) {
      let item = queue.shift();
      // 在左右子树都为空的时候返回
      if (item.left === null && item.right === null) {
        return depth;
      }
      if (item.left) {
        queue.push(item.left);
      }
      if (item.right) {
        queue.push(item.right);
      }
    }
  }
  return depth;
};
