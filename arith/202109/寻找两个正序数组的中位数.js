/*
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

 

示例 1：

输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
示例 2：

输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
示例 3：

输入：nums1 = [0,0], nums2 = [0,0]
输出：0.00000
示例 4：

输入：nums1 = [], nums2 = [1]
输出：1.00000
示例 5：

输入：nums1 = [2], nums2 = []
输出：2.00000

*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;

    // 两个数组总长度
    let len = n1 + n2;

    // 保存当前移动的指针的值(在nums1或nums2移动)，和上一个值
    let preValue = -1;
    let curValue = -1;

    //  两个指针分别在nums1和nums2上移动
    let point1 = 0;
    let point2 = 0;

    // 需要遍历len/2次，当len是奇数时，最后取curValue的值，是偶数时，最后取(preValue + curValue)/2的值
    for (let i = 0; i <= Math.floor(len/2); i++) {
        preValue = curValue;
        // 需要在nums1上移动point1指针
        if (point1 < n1 && (point2 >= n2 || nums1[point1] < nums2[point2])) {
            curValue = nums1[point1];
            point1++;
        } else {
            curValue = nums2[point2];
            point2++;
        }
    }
    return len % 2 === 0 
        ? (preValue + curValue) / 2
        : curValue
    /*
        let n = nums1.length + nums2.length;
        let nums = nums1.concat(nums2).sort((a, b) => a - b);
        
        let result = n % 2 == 0
            ? (nums[n/2] + nums[n/2-1]) / 2
            : nums[Math.floor(n/2)];
    
        return result;
    */
};
// let nums1 = [1,3], nums2 = [2]
let nums1 = [1,2], nums2 = [3,4]
// nums1 = [0,0], nums2 = [0,0]
// nums1 = [], nums2 = [1]
// let nums1 = [2], nums2 = [];
console.log(findMedianSortedArrays([1,2],  [3,4]));

var findMedianSortedArrays = function(nums1, nums2) {
    let len = nums1.length + nums2.length;
    let pre = -1, cur = -1;
    let p1 = p2 = 0;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        pre = cur;
        if (p1 < nums1.length && (nums1[p1] < nums2[p1] || p2 >= nums2.length)) {
            cur = nums1[p1];
            p1++;
        } else {
            cur = nums2[p2];
            p2++;
        }
    }
    return len % 2 === 0 ? (pre + cur) / 2: cur;
}

// 题解：
// 1、双指针法
// 2、遍历一半长度，比较两个数组的最小值，放入pre和cur中
// 3、判断奇偶，决定中位数是什么