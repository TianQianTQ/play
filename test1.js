// 实现 sleep
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

function judge(promise, ms) {
  let timeout = sleep(ms).then(() => {
    throw new Error('xxx')
  })
  return Promise.race([promise, timeout])
}

// 第一题
var a = 50;
if (!(b in window)) {
  var b = 11;
} else {
  a++;
}
console.log(a)
console.log(b)

// 第二题
let a = 50;
let obj = {
  a: 2,
  geta: function()  {
    let a = 3;
    return this.a
  }
}
console.log(obj.geta());
console.log(obj.geta.call());
console.log(obj.geta.call({a: 203}))

// 第三题
for (var i = 0; i < 5; i++) {
  (
    function() {
      setTimeout(function(){
        console.log(i)
      }, i * 1000)
    }
  )(i)
}

for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function timer() {
      console.log(i);
    }, 1000 * i)
  })(i)
}


/** try-catch问题 
 * 捕获同步函数的异常
*/
async function f() {
  try {
    await Promise.reject('出错了')
  } catch (e) {
    console.log(e);
  }
}
f();
 