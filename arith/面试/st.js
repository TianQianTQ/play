// 1、css布局
// 2、斐波那契数列
// 3、无重复字符的最长子串

// 序号0 1 2 3 4 5
// 值：1 1 2 3 5 8--
let fn = (n) => {
    let dp1 = 1, dp2 = 1, sum = 0;
    if (n < 2) return 1;
    for (let i = 2; i <= n; i++) {
        sum = dp1 + dp2;
        dp1 = dp2;
        dp2 = sum;
    }
    return sum;
}
fn(5);

'abcbbb'

let getLength = (str) => {
    if (typeof str !== 'string') return null;
    let len = str.length;
    let res = 0;
    for (let i = 0;i < len; i++) {
        let set = new Set();
        let maxlength = 0;
        let j= i;
        while (j < len && !set.has(str[j])) {
            set.add(str[j]);
            j++;
            maxlength ++;
        }
        res = Math.max(res, maxlength);
    }
    return res;
}
getLength('abcbbb');
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .parent {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .parent div {
            height: 100px;
        }
        .line1 {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .line1>div {
            flex: 1;
        }
        .line1-1 {
            background: blue;
        }
        .line1-2 {
            background: darkgoldenrod;
        }
        .line2 {
            width: 100%;
            background:  seagreen;
        }
    </style>
</head>
<body>
    <div class="parent">
        <div class="line1">
            <div class="line1-1">1</div>
            <div class="line1-2">2</div>
        </div>
        <div class="line2">3</div>
    </div>
</body>
</html>
*/
