/**  349. 两个数组的交集
给定两个数组，编写一个函数来计算它们的交集。

 

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4] */
var intersection = function(nums1, nums2) {
  if (nums1.length  > nums2.length) [nums1, nums2] = [nums2, nums1];
  let hash = new Set(nums1);
  let res = new Set();
  for (let i = 0; i < nums2.length; i++) {
    if (hash.has(nums2[i])) {
      res.add(nums2[i])
    }
  }
  return [...res];
};