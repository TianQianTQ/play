/*
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

进阶：你能尝试使用一趟扫描实现吗？
*/
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
var removeNthFromEnd = function(head, n) {
    let newHead = new ListNode(0, head);
    let slow = newHead, fast = newHead;
    while(n--) fast = fast.next;
    if (!fast) return newHead;
    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return newHead.next;
};

// 题解：
// 1、使用虚拟表头
// 2、定义快慢
// 3、注意边界情况