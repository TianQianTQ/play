/*
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 

提示：

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    function isSame(arr1, arr2) {
        if (arr1[0] <= arr2[0] && arr1[1] >= arr2[0]) return true;
        if (arr1[0] <= arr2[1] && arr1[1] >= arr2[1]) return true;
        if (arr2[0] < arr1[0] && arr2[1] > arr1[1]) return true;
        return  false;
    }
    function littleMerge(arr1, arr2) {
        let min = Math.min(arr1[0], arr2[0]);
        let max = Math.max(arr1[1], arr2[1]);
        return [min, max];
    }
    let i = 0, j = 1, res = intervals.sort((a, b) => a[0] - b[0]);;
    while (j <= res.length - 1) {
        if (isSame(res[i], res[j])) {
            let newArr = littleMerge(res[i], res[j]);
            res.splice(i, 2, newArr);
        } else {
            i++;
            j++;
        }
    }
    return res;
};
console.log(merge([[4,5],[2,4],[4,6],[3,4],[0,0],[1,1],[3,5],[2,2]]));
// 题解:
// 1、易错点：需先排序 splice(开始位置，删除几个元素，替换的元素)


var merge = function(intervals) {
    // 先根据区间start 进行大小排序
    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];
    let res = [];
    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i];
        // 当前start > 上一个end
        if (cur[0] > prev[1]) {
            res.push(prev);
            prev = cur;
        } else {
            prev[1] = Math.max(cur[1], prev[1]);
        }
    }
    res.push(prev);
    return res;
}

// 题解：
// 1、先整体排序，按start
// 2、比较上一个和当前 当前start 》上一个end 则没有重叠，放置上一个，替换两个的值
// 3、有重叠，则比较出上一个的end值
