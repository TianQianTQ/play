/*将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let preHead = new ListNode(-1),
        prev = preHead;
    while (l1 && l2) {
        if(l1.val >= l2.val) {
            prev.next = l2;
            l2 = l2.next;
        } else {
            prev.next = l1;
            l1 = l1.next;
        }
        prev = prev.next;
    }
    prev.next = l1 ? l1 : l2;
    return preHead.next;
};

// 题解：
// 1、创建链表与虚拟表头
// 2、链表赋值直接赋值节点
// 3、判断没有赋值完成的链表