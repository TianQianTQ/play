var reverseString = function(s) {
    return s.reverse();
  };
  s = ["h","e","l","l","o"]
  reverseString(s);
/*
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

 

示例：

输入："Let's take LeetCode contest"
输出："s'teL ekat edoCteeL tsetnoc"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
  /**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    let res = '';
    arr.map((item, index) => {
        let space = ' ';
        if (index === 0 || index === arr.length) {
            space = ''
        }
        res = res + space + item.split('').reverse().join('')
    });
    return res;
};
let s = "Let's take LeetCode contest";
console.log(reverseWords(s))

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
 var middleNode = function(head) {

};