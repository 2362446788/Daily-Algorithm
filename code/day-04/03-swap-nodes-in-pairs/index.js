// leetcode：https://leetcode.cn/problems/swap-nodes-in-pairs/
// 代码随想录：https://programmercarl.com/0024.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.html
// 时间复杂度：TODO
// 空间复杂度：TODO
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // 使用虚拟头结点
    let newHead = new ListNode(0, head);
    // 增加临时引用，不会影响虚拟头结点
    let cur1 = newHead;
    // 如果没有两个剩余节点了就不需要再交换
    while (cur1.next && cur1.next.next) {
        // 先保存后续还要使用的节点，因为后面调整next之后就没办法找到原来的指向了
        let temp1 = cur1.next;
        let temp2 = cur1.next.next;
        // cur1->1->2->3->4->5->null
        // temp1=1, temp2=2;
        // temp1.next=temp2.next，即1->3
        // temp2.next = temp1，即 2->1
        // cur1.next = temp2，即cur1->2
        // 再把cur1节点往后移动两位，现在temp1就是和之前的链表相比相差两位的，cur1 = temp1 和 cur1 = cur1.next.next 是一样的
        // 最后翻转的链表为 2->1->3->4->5->null，并且 cur1 目前处于 3 的位置，前两位就被交换了
        temp1.next = temp2.next;
        temp2.next = temp1;
        cur1.next = temp2;
        cur1 = temp1;
    }
    return newHead.next;

    // // 递归
    // // 递归出口
    // if (head === null || head.next === null) {
    //     return head;
    // }
    // // 将第二个节点 head.next 临时保存下来
    // let after = head.next;
    // // 头结点指向下一个节点的下一个节点
    // head.next = swapPairs(after.next);
    // // 将第二个节点当做头结点，将其 next 指向头结点
    // after.next = head;
    // // 返回新的头结点
    // return after;
};