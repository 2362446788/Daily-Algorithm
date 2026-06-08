// leetcode：https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/
// 代码随想录：https://programmercarl.com/%E9%9D%A2%E8%AF%95%E9%A2%9802.07.%E9%93%BE%E8%A1%A8%E7%9B%B8%E4%BA%A4.html
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 计算链表长度
var getListLen = function (head) {
  let len = 0;
  let cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }
  return len;
};
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let curA = headA;
  let curB = headB;
  let lenA = getListLen(headA);
  let lenB = getListLen(headB);
  // 让 curA 作为最长的那个链表
  if (lenA < lenB) {
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }
  // 链表长度差
  let i = lenA - lenB;
  // 移动最长的链表，让两个链表长度相等
  while (i > 0) {
    curA = curA.next;
    i--;
  }
  // 现在两个链表长度一样，同时移动，遇到相等的就跳出循环直接返回
  while (curA && curA !== curB) {
    curA = curA.next;
    curB = curB.next;
  }
  // 最终返回长链表的节点
  return curA;
};
