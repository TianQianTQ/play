/*
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
输入：head = [1,2,2,1]
输出：true

输入：head = [1,2]
输出：false
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) return false;
    }
    return true;
};
var isPalindrome = function (head) {
    let slow = fast = head;
    let pre = null;
    while (fast && fast.next) {
        fast = fast.next.next;
        [slow.next, slow, pre] = [pre, slow.next, slow] //在前半个循环中找到中间，并且慢指针顺手将所过地区翻转， 
    } // 出来while，fast或者fast.next已经null了，且前半段已经反转，下面 slow pre 开始配合 
    if (fast) slow = slow.next; //注意奇数个的话，slow需再单独往后走一个（通过打印pre slow fast 可看出来~)
    while (slow) {
        if (slow.val !== pre.val) return false;
        slow = slow.next;
        pre = pre.next;
    }
    return true;
};

