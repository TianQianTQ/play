/* 防抖  debounce
 多次触发，只在最后一次触发时执行目标函数
 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
 类似电梯
 应用：提交表单/搜索
 // 注意点： timer只能在外层，故返回一个函数接收event的参数
*/
// 区别： 防抖：一定时间持续触发只在最后一次执行
//       节流：一段时间内只执行一次

function debuounce (event, time, flag) { // flag是否立即执行
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    if (flag && !timer) {
      event.apply(this,args);
    } 
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      event.apply(this,args); // this并非指向debuounce的调用者，而是闭包的调用者
    }, time)
  }
}
// 看这个 - 非立即执行
function debounce (fn, time) {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() =>{
      fn.apply(this, args);
    }, time)
  }
}

/*
  使用
  setInterval(debounce(fn,500),1000) // 第一次在1500ms后触发，之后每1000ms触发一次
  setInterval(debounce(fn,2000),1000) // 不会触发一次
*/

/** 节流 throttle
 *  保证一段时间内只调用一次函数，如果这段时间多次触发，只有一次能生效
 *  类似动画播放一次24帧
 *  应用：DOM元素拖拽、下载文件点击下载
 *  实现：时间戳、定时器
 */
// 时间戳实现  第一次事件肯定触发，最后一次不会触发
function throttle(event, time) {
  let pre = 0;
  return function(...args) {
    if (Date.now() - pre > time) {
      event.apply(this, args);
      pre = Date.now;
    }
  }
}
// 定时器实现  第一次事件不会触发，最后一次一定会触发
function throttle (event, time) {
  let timer = null;
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        event.apply(this, args);
        timer = null;  // 每次执行后timer清零-->保证之后可继续触发***
      }, time)
    }
  }
}
// 标志位法
function throttle (event, time) {
  let valid = true;
  return  function(...args) {
    if  (!valid) return false;
    valid = false;
    setTimeout(() => {
      event.apply(this, args);
      valid = true;
    }, time)
  }
}


//定时器和时间戳的结合 ->  即节流和防抖的结合
function throttle (event, time) {
  let pre = 0;
  let timer = null;
  return function(...args) {
    if (Date.now - pre > time) {
      clearTimeout(timer);
      timer = null;
      pre = Date.now;
      event.apply(this, args);
    } else if (!timer) {
      timer = setTimeout(() => {
        event.apply(this, args);
      }, time)
    }
  }
}
