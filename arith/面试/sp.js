console.log('1');
setTimeout(function() {
    console.log('2');
    new Promise(function(resolve) {
       console.log('4');
       resolve();
    }).then(function() {
       console.log('5')
  })
})
 
new Promise(function(resolve) {
    console.log('7');
    resolve();
  }).then(function() {
     console.log('8')
})
/**
* 发布订阅模式
* 餐馆订餐，可以定不同的餐 A, B ,C
* 完成之后，通知用户取餐
* 要求：
* 1.先到先得
* 2.可以一次完成一份餐，也可以一次完成多份相同的餐
*/

// 传数：几份什么类型的餐 print(); 输出打印顺序
class Observe {
    // type 类型 num 个数 op
    constructor(map) {
        this.typeOutMap = map
        this.subMap = {} // 餐类数量统计
        this.peopleArr = [] // 顾客顺序
    }
    // 订餐
    sub(type, num, op) {
        if (!this.subMap[type]) {
            this.subMap[type] = 0;
        }
        this.subMap[type] += num;
        this.peopleArr.push({
            op,
            peopleType: type,
            num
        });
        print(JSON.stringify(this.subMap));
    }
    // 取餐 主动通知 参数不确定
    pub(type) {
        // 出哪种类型餐的个数
        let typeNum  = this.typeOutMap[type]; // 每次出餐个数
        print(typeNum);
        this.peopleArr.filter((item) => item.num > 0);
        print(JSON.stringify(this.peopleArr));
        for (let i = 0; i < this.peopleArr; i++) {
            print(this.peopleType)
            let { peopleType, num, op } = this.peopleArr[i];
            print(peopleType, num, op, type);
            if (peopleType === type) {
                print('进入判断环节');
                let nums = this.subMap[type]; // 剩余数量
                print(nums, num);
                if (!nums) {
                    print('没有这种类型的餐');
                    return;
                }
                if (nums - num < 0) {
                    print('超出出餐数量');
                    return;
                }
                if (nums < num) return;
                print(`请顾客：${op} 取${type}类型餐，个数${num}`);
                this.subMap[type] = nums - num;
            }
        }
    }
}
const map = {
    A: 1,
    B: 2,
    C: 3,
}
let ob = new Observe(map); //  map放置一次出某类餐多少份
// ob.sub(type, num, op) // 订阅   op定type类型餐 num份
// ob.pub(type, num) // 通知 通知op拿type类型餐 num份

ob.sub('A', 1, '张三');
ob.sub('B', 1, '李四');
ob.sub('C', 1, '王五');
ob.pub('A');


/*
2. 实现 JS 函数式编程中的 compose 函数（可接收多个 function 用于组合，执行顺序从右到左，前函数的执行结果作为后函数的入参）
function compose(){

}
const add2 = num => num+2;
const fn1 = compose(add2);
console.log(fn1(3)); //执行后，打印 5
 

const sum = (a,b) => a+b;
const fn2 = compose(add2, sum);
console.log(fn2(3,2)); //执行后，打印 7
*/



// function compose(...fns) {
//     let count = fns.length - 1;
//     let res;
//     return function fn(...args) {
//         res = fns[count].apply(this, args);
//         if (count === 0) return res;
//         count --;
//         return fn.call(null, res);
//     }
// }

function compose(...fns) {
    let count = fns.length - 1;
    let res;
    return function fn(...args) {
        res = fns[count](...args);
        if (count === 0) return res;
        count --;
        return fn(res);
    }
}
function compose(...fns) {
    return (...args) => {
        let res,
        while (fns.length) {
            if (!Array.isArray(fns)) {
                fns = [fns];
            }
            res = args = fns.pop(args);
        }
        return res;
    }
}
const add2 = num => num+2;
const fn1 = compose(add2);
console.log(fn1(3)); //执行后，打印 5
 

const sum = (a,b) => a+b;
const fn2 = compose(add2, sum);
console.log(fn2(3,2)); //执行后，打印 7
