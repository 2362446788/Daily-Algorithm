// leetcode：https://leetcode.cn/problems/merge-two-sorted-lists/
// 代码随想录：https://programmercarl.com/0021.%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E9%93%BE%E8%A1%A8.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 构造一个新链表
  // 移动两个链表，全部移动到最后才结束
  let newHead = new ListNode();
  // 复制一个新链表的引用，方便构造新的链表
  let pre = newHead;
  // 将两个链表遍历
  // 取出最小的那个值给到 pre.next，并且移动对应的链表，并且将 pre 也往后移动
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      pre.next = list1;
      list1 = list1.next;
    } else {
      pre.next = list2;
      list2 = list2.next;
    }
    pre = pre.next;
  }
  // 遍历完以后，最多只有一个还没有被完全合并完，直接将链表末尾指向未合并完的链表即可
  pre.next = list1 === null ? list2 : list1;
  return newHead.next;
};
