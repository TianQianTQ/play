/**实现功能
 * 
 */
class Scheduler { add(promiseCreator) {
   //...
 } }
 const timeout = (time) => new Promise(resolve => { setTimeout(resolve, time) })
 const scheduler = new Scheduler() 
 const addTask = (time, order) => { scheduler.add(() => timeout(time)) .then(() => console.log(order)) }
addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
// output: 2 3 1 4 
// 一开始，1、2 两个任务进入队列 
// 500ms 时，2 完成，输出 2，任务 3 进队 
// 800ms 时，3 完成，输出 3，任务 4 进队 
// 1000ms 时，1 完成，输出 1 
// 1200ms 时，4 完成，输出 4

/** 实现add */
function sum() { 
  let num = arguments[0];
  if (arguments.length === 1) {
    return function(sec) {
      return sec + num
    }
  } else {
    for (let i = 1; i < arguments.length; i++) {
      num += arguments[i]
    }
    return num;
  }
}
console.log(sum(2,3)); // 输出 5 
console.log(sum(2)(3)); // 输出 5



function getNum(n) {
  if (n < 0) return null;
  if (n === 0) return  1;
  let a = 1;
  let sum
  for (let i = 0; i < n; i++) {
    sum = a + (i+1)* 2;
    a = sum;
  }
  return a
}