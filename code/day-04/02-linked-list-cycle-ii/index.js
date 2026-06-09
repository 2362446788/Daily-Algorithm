// leetcode：https://leetcode.cn/problems/linked-list-cycle-ii/
// 代码随想录：https://programmercarl.com/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.html
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // 思路：使用快慢指针，快指针走两步，慢指针走一步，如果有环，一定能相遇，因为快指针相对于慢指针就是多移动一步，有环一定能相遇
    // 相遇的节点和头结点一直移动，一定能相遇，有可能节点内多移动了很多圈才遇到，如果最后遇到了就返回相遇的那个节点
    // 否则返回 null
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            let cur1 = fast;
            let cur2 = head;
            while (cur1 !== cur2) {
                cur1 = cur1.next;
                cur2 = cur2.next;
            }
            return cur1;
        }
    }
    return null;
};
