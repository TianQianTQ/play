/*
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
*/
/**
 * 
 * Set数据格式    add()  添加成员  delete() 删除成员    has  是否为Set成员 clear()    清除所有成员   size长度
 * Array.from 将set结构转为数组，故数组去重   Array.from(new Set(array));
 * keys()  values()  entries()  forEacj();
 * map    filter
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	const occ = new Set();
	const n = s.length;
	const rk = -1, ans =  0;
	for (let i =  0; i < n; ++i) {
		if (i != 0) {
			occ.delete(s.charAt(i - 1));
		}
		while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
			occ.add(s.charAt(rk + 1));
			++rk;
		}
		ans = Math.max(ans, rk - i + 1)
	}
	return  ans;

	const occ = new Set();
	const n = s.length;
	const l = -1, r = 0;
	for (let i = 0; i < n; ++i) {
		if (i != 0) {
			occ.delete(s.charAt(i - 1));
		}
		while (l + 1 < n && !occ.has(s.charAt(l + 1))) {
			occ.add(s.charAt(l + 1));
			++ l;
		}
		r = Math.max(r, l - i + 1)
	}
	return r;

};


const a = "abcabcbb";
lengthOfLongestSubstring(a);