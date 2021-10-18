/*
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器。

*/
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let maxArea  = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let area = Math.min(height[i], height[j]) * (j - i);
            maxArea =  Math.max(area, maxArea);
        }
    }
    return maxArea;
};
let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height))
// 超出时间限制

var maxArea = function(height) {
    let maxArea  = 0;
    let length = height.length;
    let left = 0, right = length - 1;
    while (left !== right) {
        let min = Math.min(height[left], height[right])
        let area = min * (right - left);
        maxArea = Math.max(maxArea, area);
        if (height[left] < height[right]) {
            left ++;
        } else {
            right --;
        }
    }
    return maxArea;
};

// 解析： 正常遍历思想 超出时间限制
// 双指针方案
