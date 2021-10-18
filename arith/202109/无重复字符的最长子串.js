/*给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。


示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:

输入: s = ""
输出: 0
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // if (s.length < 2) return s.length;
    // let map = {}, max = 0, flag = false;
    // let arr = s.split('');
    // for (let i = 0; i < arr.length; i++) {
    //     // debugger;
    //     if (flag) {
    //         max = Math.max(max, Object.keys(map).length);
    //         map = {};
    //     }
    //     let key = arr[i];
    //     map[key] = key;

    //     for (let j = i+1; j < arr.length; j++) {
    //         let key = arr[j];
    //         if (!map[key]) {
    //             map[key] = key;
    //         } else {
    //             flag = true;
    //             break;
    //         }
    //     }
    // }
    // max = Math.max(max, Object.keys(map).length);
    // return max;
    let len = s.length;
    let result = 0;
    for (let i = 0; i < len; i++) {
        let set = new Set();
        let maxLen = 0;
        let j = i;
        while (j < len && !set.has(s[j])) {
            set.add(s[j]);
            j++;
            maxLen++;
        }
        result = Math.max(result, maxLen);
    }
    return result;
};
console.log(lengthOfLongestSubstring('au'));


// 解法 1、暴力解法借助map或set判断重复  2、双指针收缩 left right