// leetcode：https://leetcode.cn/problems/intersection-of-two-linked-lists/
// 代码随想录：https://programmercarl.com/0160.%E7%9B%B8%E4%BA%A4%E9%93%BE%E8%A1%A8.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 思路
// 获取两个链表的长度，算出差值，然后把长的那个链表移动对应的差值，这样两个链表就相当于长度一样能同时移动
// 如果移动过程中发现了有相同的节点，那么就证明相交了，返回相交的节点
var getIntersectionNode = function (headA, headB) {
  function getListNodeLength(head) {
    let length = 0;
    let cur = head;
    while (cur) {
      length++;
      cur = cur.next;
    }
    return length;
  }
  let lengthA = getListNodeLength(headA);
  let lengthB = getListNodeLength(headB);
  let longHead = headA;
  let shortHead = headB;
  let diff = lengthA - lengthB;
  if (lengthA < lengthB) {
    [longHead, shortHead] = [shortHead, longHead];
    diff = lengthB - lengthA;
  }
  // 把长链表移动 diff
  while (diff) {
    longHead = longHead.next;
    diff--;
  }
  // 同时移动两个链表
  while (longHead) {
    if (longHead === shortHead) {
      return longHead;
    }
    longHead = longHead.next;
    shortHead = shortHead.next;
  }
  return null;
};
