/*整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

 

示例 1：

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
示例 2：

输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
示例 3：

输入：nums = [1], target = 0
输出：-1
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let nums = [1], target = 0
var search = function(nums, target) {
    if (nums.length === 0) return -1;
    if (nums.length === 1) return nums[0] === target ? 0 : -1;
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = parseInt((left + right) / 2);
        if (nums[mid] === target) return mid;
        // 左边升序
        if (nums[left] <= nums[mid]) {
            // target在升序的里面
            if(nums[left] <= target && target <= nums[mid]) {
                right = mid - 1;
            } else {
                // target不在升序的里面
                left = mid + 1;
            }
        } else {
            if(nums[mid + 1] <= target && target <= nums[right]){
                left = mid + 1;
            }else {
                right = mid - 1;
            }
        }
    }
    return nums[left] === target ? left : -1;
};
// 时间复杂度：O(logn) 空间复杂度：O(1)
// 直接遍历数据
var search = function(nums, target) {
    for(var i = 0;i < nums.length;i++){
        if(nums[i] === target){
            return i;
        }
    }
    return -1;
};
// 时间复杂度：O(n), 空间复杂度：O(1)。

// 题解：
// 1、二分查找
// 2、mid

