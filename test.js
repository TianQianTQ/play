/**
 * @param {object|array|number|string} - 待format的数据
 * @return {string} - 格式化后的string
 */
function format(obj) {
  let res = {}
  if (obj instanceof Array) {
    if (obj.length > 0) {
      for (let i = 0; i < obj.length; i++) {
        if (typeof obj[i] === 'object') {
          obj[i] = format(obj[i])
        }
      }
      res = obj;
    } else {
      res = []
    }
  } else {
    if (Object.keys(obj).length > 0) {
      Object.keys(obj).forEach((item) => {
        console.log(obj[item])
        switch(typeof obj[item]) {
          case 'string': res[`'${item}'`] = obj[item]; break;
          case 'number': res[`'${item}'`] = obj[item]; break;
          case 'object': 
            if (obj[item] instanceof Array) {
              let arr = obj[item];
              console.log(arr, 'arr')
              for (let i =  0; i < arr.length; i++) {
                if (typeof arr[i] === 'object') {
                  arr[i] = format(arr[i])
                }
              }
              res[`'${item}'`] = arr;
            } else {
              res[`'${item}'`] = format(obj[item])
            };
            break;
          default: res[`'${item}'`] = obj[item]; break;
        }
      })
    }
  }
  return res;
}
// test case
const data = {
  a: 1,
  b: [
    2,
    3,
    {                    
      c: 4,
      d: "5"
    },
    []
  ],
  d: {
    e: 5,
    f: {
      g: 6
    },
    g: {}
  }
}
console.log(format(data))
/*
{
  "a": 1,
  "b": [
    2,
    3,
    {
      "c": 4,
      "d": "5",
    },
    []
  ],
  "d": {
    "e": 5,
    "f": {
      "g": 6
    },
    "g": {} 
  }
}
*/

// test case2
{a: 1}
/*
{
  "a": 1
}
*/

//

for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function timer() {
      console.log(i);
    }, 1000 * i)
  })(i)
}


function myPromiseAll (arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      throw Error('xxx')
    }
    let result = [];
    let count = 0;
    arr.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        result.push(res);
        count++;
        count === arr.length && resolve(result);
      })
    }, (err) => {
      reject(err);
    })
  })
}
Promise.arguments._finally = function (callback) {
  let p = this.constructor;
  return this.then(
    value => p.resolve(callback()).then(()  => value),
    reason => p.resolve(callback()).then(() => {throw reason})
  )
}
Promise.retry = function(fn, maxTime) {
  let count = 0;
  function run() {
    return new Promise((resolve, reject) => {
      console.log(`第${count}次`);
      resolve(fn());
    }).then((res) => {
      return Promise.resolve(res)
    }).catch((e) => {
      count++;
      if (count < maxTime) {
        run();
      } else {
        return Promise.reject(e)
      }
    })
  }
  return run();
}

private static void sortstack(Stack<Integer> stack) {
  Stack<Integer> help=new Stack<Integer>();
  while(!stack.empty()){
      int cur=stack.pop();
      while(!help.empty()&&help.peek()>cur){
         stack.push(help.pop());
      }
      help.push(cur);
  }
  while (!help.isEmpty()){
      stack.push(help.pop());
  }
}

let arr = [1,4,7,3,9,6];
function sort(arr) {
  if (arr.length < 2) return arr;
  let res = [arr[0]];
  while (arr.length) {
    let item = arr.pop();
    while (res.length && res[])
  }
}


var mergeTwoLists = function(l1, l2) {
  if (!l1) return  l2;
  if (!l2) return  l1;
  let head = new ListNode(0);
  let res = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      res.next = l1;
      l1 = l1.next;
    } else {
      res.next = l2;
      l2 = l2.next;
    }
    res = res.next;
  }
  if (l1) res.next = l1;
  if (l2) res.next = l2;
  return head.next;
}