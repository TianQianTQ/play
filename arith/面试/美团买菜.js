shouldComponentUpdate 有什么作用

useMemo useCallback 区别

useMemo 和React.memo 的区别  

红色区域的宽度、高度分别是多少？
.test{
    width: 100px;
    height: 80px;
    border: 20px solid red;///
    background: red;//////
    padding: 20px;
    margin: 20px;
    box-sizing: border-box;
}

<div class="test"></div>
h5如何实现1px边宽有哪些适配方案？
background-size：cover  / contain  分别什么作用

视口：400*400
图片：400*500

实现一个三列布局，中间定宽，两边平分剩余空间

let name = 'global';
const obj = {
    name:'obj',
    test:function(){
        let name = 'scope';
        console.log(this.name);
    }
}
const test = obj.test;
test();//?
obj.test();//?

try{
  let pro = new Promise((res,rej)=>{
      rej('error')
  })
}catch(e){
  console.log(e);
}

/** dj
 async function f() {
  try {
    await Promise.reject('出错了')
  } catch(e) {
    console.log(e)
  }
}
f() // 出错了
 */

Promise.all([
new Pro(),//rej
new Pro(),
new Pro()
]).then(?).catch(?)
Promise.race

var pro = new Promise((res,rej)=>{
  res(1);
});
pro.then(res=>{
  console.log(res);
});
setTimeout(()=>{
console.log(2);
})
pro.then(res=>{
  console.log(res);
}).then(res=>{
  console.log(res);
})

var arr = [1,2,3,4,5]; 
arr.pop(); 
arr.concat([6,7]); 
arr.push(8); 
arr.reverse(); 
console.log(arr);

class A{
  constructor(){
      this.test = 'constructor'
  }
  print(){
      console.log('A');
  }
}
class B extends A{
  constructor(){
      super();
  }
}
var b = new B();
A.prototype.name = 'A';
A.prototype.test = 'prototype';
console.log(b.name);
console.log(b.test);

实现一个简单的bind函数
function fun1(a,b){
    console.log(this.name,a+b);
}

function bind(fun, ctx){
//???????????
}

const fun2 = bind(fun1,{name:'测试：'});
fun2(1,2);//测试，3

将一个嵌套多层的数组 array (嵌套可以是任何层数)转换为只有一层的数组
输入：[1,2,[3,4,[5,6],'7'],'a,b]c']
输出：[1,2,3,4,5,6,'7','a,b]c']