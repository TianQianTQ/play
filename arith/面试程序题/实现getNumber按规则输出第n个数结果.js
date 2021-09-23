/* 
输入3   输出13
备注：已知数列规则 为[1,3,7,13,21,31,43...],计数从0开始
*/
function getNum(n) {
    let a = 1, res = a;
    for (let i = 0; i <= n; i++) {
        res = a + 2*i;
        a = res;
    }
    return res;
}
console.log(getNum(2));


