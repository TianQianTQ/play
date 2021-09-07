/* 剑指 Offer 06. 从尾到头打印链表
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
示例 1：
输入：head = [1,3,2]
输出：[2,3,1]

限制：
0 <= 链表长度 <= 10000
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

// 函数方法 reverse unshift
var reversePrint = function(head) {
  let arr = []
  while (head !== null) {
    arr.push(head.val);
    head = head.next
  }
  return arr.reverse();
};
// 翻转链表 用一个变量存储next,另一个变量进行存放 next
var reversePrint = function(head) {
  let prev = null,
      nhead = head,
      temp;
  while(nhead!=null) {
      temp = nhead.next
      nhead.next = prev
      prev = nhead
      nhead = temp
  }
  nhead = prev;
  let arr = []
  while(nhead) {
      arr.push(nhead.val);
      nhead = nhead.next
  }
  return arr;
};