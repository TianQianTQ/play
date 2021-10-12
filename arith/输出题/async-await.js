// 1、await返回非promise
async function func1() {
    console.log('func1');
    var a = await func2(); //当await返回非promise
    console.log('func1 return');
}
function func2() {
    console.log('func2');
} //返回undefined
func1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve('resolved');
}).then(function (data) {
    console.log(data);
});
// 执行结果：
// func1
// func2
// promise1
// func1 return
// resolve

// 2、await返回promise
async function func1() {
    console.log('func1');
    var a = await func2(); //当await返回promise   
    console.log('func1 return');
}
async function func2() {
    console.log('func2');
} //返回promise
func1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve('resolved');
}).then(function (data) {
    console.log(data);
});
// 执行结果：
// func1
// func2
// promise1
// func1 return
// resolved

// 3、await返回promise
async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}
async function async2() {
    console.log('async2');
}
console.log("script start");
setTimeout(function () {
    console.log("settimeout");
}, 0);
async1();
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});
console.log('script end');
/*
执行结果：
script start
async1 start
async2
promise1
script  end
async1  end
promise2
settimeout
*/
