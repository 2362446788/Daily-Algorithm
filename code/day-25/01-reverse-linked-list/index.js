// leetcode：https://leetcode.cn/problems/reverse-linked-list/
// 代码随想录：https://programmercarl.com/0206.%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.html
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 递归函数
var reserve = function (cur, pre) {
  // 先定义递归出口
  if (cur === null) {
    // 返回新的头节点
    return pre;
  }
  let temp = cur.next;
  cur.next = pre;
  pre = cur;
  // 在这里进行递归处理了
  return reserve(temp, pre);
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 双指针写法
  // 需要两个指针，cur 指向头节点，pre 指向头节点的前一个节点，这样每一次循环把 cur.next 指向 pre，就做到了翻转
  // 细节处理 cur.next 指向了 pre 之后 cur.next 就不是之前的链表方向了，那么需要在翻转前临时保存 cur.next
  // 再移动 pre 和 cur，先移动 pre 到 cur 位置，再移动 cur 到 temp 位置
  let cur = head;
  let pre = null;
  while (cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;

  // 递归写法，参考双指针
  // 怎么决定参数是什么呢？类似双指针，直接传递 cur 和 pre
  // return reserve(head, null);

  // // 如果头节点是 null 直接返回
  // if (head === null) {
  //   return head;
  // }
  // // 创建一个新的节点
  // let temp;
  // while (head) {
  //   // 根据 head.val 创建链表节点
  //   // 如果是第一个节点那么 val 是 null
  //   // 如果是后续的节点，那么就指向前一个节点，也就是上一个循环中的 temp 节点
  //   // head 链表节点往后移动
  //   temp = new ListNode(head.val, temp === undefined ? null : temp);
  //   head = head.next;
  // }
  // // 最后返回新的链表头节点
  // return temp;
};
