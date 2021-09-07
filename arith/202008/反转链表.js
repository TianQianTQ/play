/** 剑指 Offer 24. 反转链表
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

限制：
0 <= 节点个数 <= 5000 
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  var prev = null,cur=head,temp;
    while(cur){
      temp = cur.next;//修改前先记住下一个节点
      cur.next = prev; //改别指向，第一个节点prev是null,
      prev = cur; //记录前一个节点，供下次循环使用
      cur = temp; // cur通过temp指向下一节点
    }
    return prev;//cur会多循环直到null
};