// leetcode：https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
// 代码随想录：https://programmercarl.com/0019.%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E5%80%92%E6%95%B0%E7%AC%ACN%E4%B8%AA%E8%8A%82%E7%82%B9.html
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 双指针
  // 使用双指针维护一个范围，fast 先走 n 步，这样和 slow 之间的差距就是 fast 走完之后目标的位置
  // 例如 1->2->3->4吗，删除倒数第二个
  // fast 先走两步到 3，此时 slow 还在 1，接着 fast 再走两步走到 null，slow 走两步走到了 3，此时 3 就是要删除的目标节点，但是 slow 此时不可能删除自己，因此需要 slow 比 fast 少走一步，即 fast 需要多走 n + 1 步，然后再同步移动
  let newHead = new ListNode(0, head);
  let fast = newHead;
  let slow = newHead;
  // 快指针先走 n + 1 步
  // fast 多走一步，这样 slow 的位置就会在目标节点的前一个节点，方便删除目标节点
  n++;
  while (n-- && fast !== null) {
    fast = fast.next;
  }
  // 快慢指针同时移动
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  // 删除目标节点
  slow.next = slow.next.next;
  // 返回头节点
  return newHead.next;
};
