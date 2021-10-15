/*
实现一个算法 getClosest3Nums,从数组中找出3个元素，使这3个元素和最接近与给定数n;
输入 0, [1,-1,-2,-3,0,2,1]  输出[1,-1,0] 或 [1,-3,2]
*/
function getClosest3Nums(n, arr) {
    arr = arr.sort((a, b) => a-b);
    let res = [];
    // 取中位数
    // while循环 如果left >  n 直接输出left left+ left++
    for (let i = 0; i < arr.length; i++) {
        if (i >0 && arr[i] === arr[i-1]) continue;
        let left = i+1, right = arr.length -1;
        while(left < right) {
            let sum = arr[left] + arr[right] + arr[i];
            if (sum === n) {
                res.push([arr[left], arr[right], arr[i]]);
            }
        }
    }
}