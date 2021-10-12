/*1、---------------------------------------------------------------------------- */
const fs = require('fs');
fs.readFile(__filename, (data) => {
    // poll(I/O 回调) 阶段
    console.log('readFile')
    Promise.resolve().then(() => {
        console.error('promise1')
    })
    Promise.resolve().then(() => {
        console.error('promise2')
    })
});
setTimeout(() => {
    // timers 阶段
    console.log('timeout');
    Promise.resolve().then(() => {
        console.error('promise3')
    })
    Promise.resolve().then(() => {
        console.error('promise4')
    })
}, 0);
// 下面代码只是为了同步阻塞1秒钟，确保上面的异步任务已经准备好了
var startTime = new Date().getTime();
var endTime = startTime;
while (endTime - startTime < 1000) {
    endTime = new Date().getTime();
}
// timeout promise3 promise4 readFile promise1 promise2 
/*2、---------------------------------------------------------------------------- */
setTimeout(() => {
    console.log('timeout1')
    Promise.resolve().then(function () {
        console.log('promise1')
    })
}, 0);
setTimeout(() => {
    console.log('timeout2')
    Promise.resolve().then(function () {
        console.log('promise2')
    })
}, 0);
// 浏览器执行：timeout1 promise1 timeout2  promise2
// node11以后跟浏览器执行一致，timer阶段执行完后会检查微任务，一并执行完 再进行下一个阶段

/*3、---------------------------------------------------------------------------- */
/* 
setImmediate() 在 check 阶段执行的
process.nextTick() 比 promise.then() 的执行还早；在同步任务后，其他所有异步任务前会优先执行它，可以想象是把 nextTick 的任务放到了当前循环的后面
与 promise.then() 类似，但比 promise.then() 更前面。不管其他异步任务，先尽快执行 nextTick。如下面的代码，因此这里的 nextTick 其实应该更符合“setImmediate”这个命名才对。 
 */
setTimeout(() => {
    console.log('timeout');
}, 0);
Promise.resolve().then(() => {
    console.error('promise')
})
process.nextTick(() => {
    console.error('nextTick')
})

// 输出：nextTick、promise、timeout


setTimeout(() => {
    console.log('timeout');
}, 0);
setImmediate(() => {
    console.log('setImmediate');
});
// 输出：timeout、 setImmediate

const fs = require('fs');
fs.readFile(__filename, (data) => {
    console.log('readFile');
    setTimeout(() => {
        console.log('timeout');
    }, 0);
    setImmediate(() => {
        console.log('setImmediate');
    });
});

// 输出：readFile、setImmediate、timeout
/* 解析：
1、第一轮循环无
2、第二轮循环：poll 阶段会检测如果有 setImmediate 的任务队列则进入 check 阶段，否则再进行判断，如果有定时器任务回调，则回到 timers 阶段，所以应该进入 check 阶段执行 setImmediate，输出“setImmediate”；
3、第三轮循环：timer  
*/



