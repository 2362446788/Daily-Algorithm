// leetcode：https://leetcode.cn/problems/binary-tree-level-order-traversal/
// 代码随想录：https://programmercarl.com/0102.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 思路分析
  // 二叉树的结构没办法直接做层序遍历，需要借助队列来实现
  // 把头节点放入队列中，依次循环队列元素，并且每一次记录需要弹出多少个元素，在遍历的过程中将元素弹出，并且把其左右子树加入队列中，这样队列的值就会一直不为空，能接着循环执行，直到把所有节点都弹出去结束
  // 定义结果
  if (root === null) {
    return [];
  }
  let result = [];
  // 队列，将头节点放入队列中
  let queue = [root];
  // 循环队列
  while (queue.length) {
    // 存放弹出的节点
    let value = [];
    // 记录需要弹出多少个元素
    // 不能直接 while (queue.length)，因为队列的数据一直在变化
    let num = queue.length;
    while (num) {
      // 把队列队头数据弹出
      let item = queue.shift();
      // 加入结果中
      value.push(item.val);
      // 将 num 减一
      num--;
      // 把左右子树加入队列中
      if (item.left) {
        queue.push(item.left);
      }
      if (item.right) {
        queue.push(item.right);
      }
    }
    // 把弹出的结果加入最终结果中
    result.push(value);
  }
  return result;
};
