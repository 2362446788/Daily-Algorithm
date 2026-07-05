// leetcode：https://leetcode.cn/problems/add-two-numbers/
// 代码随想录：https://programmercarl.com/0002.%E4%B8%A4%E6%95%B0%E7%9B%B8%E5%8A%A0.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 构造一个新链表
// 然后遍历两个链表，链表长度不一样的话以最长的那个为终止条件，然后短链表的值为 0
// 计算两个节点的加和，将结果放入到新链表中
// 注意：增加一个进位 carry 用于保存加和大于 10 的数据，新链表的值为 sum % 10，carry =  Math.floor(sum / 10)，sum = val1 + val2 + carry
// 然后移动 l1 和 l2
// 最后如果剩余了 carry，新增一个尾节点来保存
var addTwoNumbers = function (l1, l2) {
  let newHead = new ListNode(null);
  // 用于构造新链表结构
  let pre = newHead;
  let carry = 0;
  while (l1 || l2) {
    let val1 = l1 === null ? 0 : l1.val;
    let val2 = l2 === null ? 0 : l2.val;
    let sum = val1 + val2 + carry;
    pre.next = new ListNode(sum % 10);
    pre = pre.next;
    carry = Math.floor(sum / 10);
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (carry) {
    pre.next = new ListNode(carry);
  }
  return newHead.next;
};
