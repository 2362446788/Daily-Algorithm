// leetcode：https://leetcode.cn/problems/remove-linked-list-elements/
// 代码随想录：https://programmercarl.com/0203.%E7%A7%BB%E9%99%A4%E9%93%BE%E8%A1%A8%E5%85%83%E7%B4%A0.html
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 直接创建一个虚拟头节点
  let newHead = new ListNode(0, head);
  // 创建一个临时变量，然后操作都在这个变量上，不影响 newHead
  let tem = newHead;
  // 从头节点 head，即 tem.next 开始判断
  while (tem.next) {
    // 如果节点匹配上，就删除，将 item.next 指向下下个节点，中间的几点就被跳过，后续被系统自动回收
    if (tem.next.val === val) {
      tem.next = tem.next.next;
    } else {
      // 没匹配上就 tem 往后移动到 tem.next
      tem = tem.next;
    }
  }
  return newHead.next;

  // // 先把头节点删除，需要判断是否为 null，不然会出错
  // while (head !== null && head.val === val) {
  //     head = head.next;
  // }
  // // 如果已经为 null 了直接 return
  // if (head === null) {
  //     return head;
  // }
  // // 借助一个临时变量，用来删除剩余的链表节点
  // let tem = head;
  // while (tem) {
  //     if (tem.next && tem.next.val === val) {
  //         // 链表的下一个节点需要删除，就将下个节点指向下下个节点
  //         tem.next = tem.next.next;
  //     } else {
  //         tem = tem.next;
  //     }
  // }
  // // 最后返回 head，这里能直接返回 head，因为刚刚去操作的 tem 临时变量
  // return head;
};
