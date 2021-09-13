/*
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母都恰好只用一次。

 

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]

*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map;
    strs.forEach(item => {
        let sortStr = item.split('').sort().join('');
        if (map.has(sortStr)) {
            map.set(sortStr, [...map.get(sortStr), item])
        } else {
            map.set(sortStr, [item])
        }
    })
    return Array.from(map.values());
};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

// 题解：
// 1、利用map结构 
// 2、排序字符串判断key值
// 3、map get(key) set(key, value) has(key) delete(key)  size  clear()
// Map.prototype.keys()：返回键名的遍历器。
// Map.prototype.values()：返回键值的遍历器。
// Map.prototype.entries()：返回所有成员的遍历器。
// Map.prototype.forEach()：遍历 Map 的所有成员。