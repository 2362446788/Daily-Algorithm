// leetcode：https://leetcode.cn/problems/symmetric-tree/
// 代码随想录：https://programmercarl.com/0101.%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 思路：
// 就是判断左右子树是否相等
// 1. 左为空，右不为空 返回 false
// 2. 左不为空，右为空 返回 false
// 3. 左右都为空 返回true
// 4. 左右值不相同 返回 false
// 剩下的就是左右两个节点相同了，剩下的就是去递归判断两个节点的外侧和内侧是否相同
// outside = left.left === right.right
// inside = left.right === right.left
// 最后返回 outside && inside
var isSymmetric = function (root) {
  // 递归法
  // 就是判断左右两个子树是否相等
  function compare(left, right) {
    if (left === null && right !== null) {
      // 左为空，右不为空
      return false;
    } else if (left !== null && right === null) {
      // 左不为空，右为空
      return false;
    } else if (left === null && right === null) {
      // 左右都为空
      return true;
    } else if (left.val !== right.val) {
      // 左右值不相同
      return false;
    }
    // 剩下的就是左右都有值并且值相同，继续递归判断左右子树
    // 外侧比较
    let outside = compare(left.left, right.right);
    // 内侧比较
    let inside = compare(left.right, right.left);
    // 返回两者的比较结果
    return outside && inside;
  }
  if (root === null) {
    return false;
  }
  return compare(root.left, root.right);
};

// 思路
// 借用队列来将左右子树进行比较
// 初始时将左右子树添加到队列中，循环队列，然后将前两个树取出比较
// 如果两者都为空继续 continue 执行
// 如果两者出现下面其中的一种类型就返回 false：1. 左为空，右不为空；2. 左不为空，右为空；3. 左右值不相同
// 取出的节点判断想同了就继续将两个节点的子节点加入到队列中，需要保持左子树外侧+右子树内侧，左子树内侧+右子树外侧的规则加入
// 这样才能比较是否对称
// 如果最后循环结束，那么说明没有 false 的情况直接返回 true
var isSymmetric1 = function(root) {
    // 迭代法
    if (root === null) {
        return false;
    }
    // 使用队列来保存数据，将数据两两取出比较
    let queue = [root.left, root.right];
    while (queue.length) {
        let leftNode = queue.shift();
        let rightNode = queue.shift();
        // 如果两者为空，那继续取
        if (leftNode === null && rightNode === null) {
            continue;
        }
        // 下面几种情况为false
        if (
            leftNode === null && rightNode !== null ||
            leftNode !== null && rightNode === null ||
            leftNode.val !== rightNode.val
        ) {
            return false;
        }
        // 接着就是把左右子树的值添加到队列中
        // 按照左子树外侧+右子树内侧，左子树内侧+右子树外侧的规则加入
        // 因为比较的时候是取两个数比较，所以需要这样加入队列
        queue.push(leftNode.left);
        queue.push(rightNode.right);
        queue.push(leftNode.right);
        queue.push(rightNode.left);
    }
    return true;
};