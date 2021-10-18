function add(str1, str2) {
    let maxLength = Math.max(str1.length, str2.length);
    let len1 = str1.length, len2 = str2.length;
    let temp = 0 // 存储进位
    let total = [];
    for (let i = 0; i < maxLength; i++) {
        temp += Number(str1.charAt(len1 - i - 1)) +  Number(str2.charAt(len2 - i - 1));
        if (temp > 9) {
            total.unshift((temp % 10));
            temp= 1;
        } else {
            total.unshift(temp);
            temp = 0;
        }
    }
    total = total.join('');
    return total;
}
console.log(add('123','458'));
// 小数点版本



var maxAreaOfIsland = function(grid) {
    const row = gird.length, col = grid[0].length;
    let res = 0;
    const dfs = (i, j) => {
        // 越界情况返回0
        if (i < 0 || j < 0 || i >=row || j >= col) {
            return 0;
        }
        if (grid[i][j] === 0) return 0;
        // 防止后面访问到0
        grid[i][j] = 0;
        // 递归计算 岛屿面积
        return 1 + dfs(i, j-1) + dfs(i-1, j) + dfs(i+1, j) + dfs(i, j+1);
    }
    // 遍历二维数组
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                res = Math.max(res, dfs(i,j));
            }
        }
    }
    return res;
};