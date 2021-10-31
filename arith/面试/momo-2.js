// n = 5
// 1+1...+1=5
// 1+..+2=5
// 1+1+3=5
// 1+4=5

function printCombintions(n) {
    let res = [];
    function getNum(target, arr) {
        if (target === 0) {
            if (arr.length) {
                res.push(arr);
            }
            return;
        }
        if (target < 0) return;
        arr.push()
        // console.log(arr, 'arr');
        // arr.push(target);
        // getNum(n-target, arr);
        
    }
    for (let i = 1; i < n; i++) {
        let j = i;
        while (j > 0) {
            // debugger;
            getNum(j, []);
            j--;
        }
    }
    return res;
}
console.log(printCombintions(5));