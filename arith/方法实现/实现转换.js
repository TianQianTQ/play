/**
 * 写一个函数实现以下数据转换：
 * {a: {b: {c:1}}, d:[1,2]}
 * 转换成：
 * {'a.b.c': 1,  'd[0]':1, 'd[1]':2}
 */

function transform(obj) {
    let res = {};
    function tran(obj, str) {
        if (Array.isArray(obj)) {
            obj.forEach((item, index) => {
                let key = `${str}[${index}]`;
                res = {
                    ...res,
                    ...tran(item, key)
                }
            })
        } else if (typeof obj === 'object') {
            for (let i in obj) {
                let key = str === '' ? `${i}` : `${str}.${i}`
                res = {
                    ...res,
                    ...tran(obj[i], key)
                }
            }
        } else {
            res[str] = obj;
        }
        return res;
    }
    tran(obj, '');
    return res;
}
// let obj = {a: {b: {c:1}}, d:[1,2]}
let obj = {C:1,f:[1,2]}
transform(obj);
