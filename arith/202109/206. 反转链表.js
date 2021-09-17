/*
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    let pre = null, cur = head, temp;
    while(cur) {
        temp = cur.next; // 修改之前 先记住下一个节点 
        cur.next = pre; // 改掉尾指向，第一个节点pre是null
        pre = cur; // 赋值当前节点
        cur = temp; // cur通过 temp指向下一个
    }
    return pre;
};
// 题解：
// 1、头插法
// 2、需要保存上一步的链表