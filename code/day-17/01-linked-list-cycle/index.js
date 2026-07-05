// leetcode：https://leetcode.cn/problems/linked-list-cycle/
// 代码随想录：https://programmercarl.com/0141.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 思路
// 使用快慢指针去走，如果有环，那么快慢指针一定会在环中相遇
// 遍历终止条件：快指针为空或者快指针的next为空
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
