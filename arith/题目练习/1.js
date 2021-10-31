/*
1、jsonp的实现 promise 版本
2、求数组所有子集 [1,2,3]-->[1] 、[2]、[1,2]、[3]、[1,2,3]、[1,3]、[2,3]
3、实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject 比如失败后需要重试三次

4、const data = [
    {
      name: '11',
      children: [
        {
          name: '12',
          children: [
            {
              name: '13'
            }
          ]
        }
      ]
    },
    {
      name: '21',
      children: [
        {
          name: '22',
          children: [
            {
              name: '13'
            }
          ]
        }
      ]
    }    
  ]
  写个方法 getAllNames 获取所有的 name 值, 返回数组，可以用 递归 和 非递归

5、实现 reduce 方法
6、求数组的交集
7、实现 多个 promise [p1, p2, p3], 并行执行，前一个promise执行完，才能执行下一个promise
8、实现一个方法 deepKey(obj, fn) 转换 obj 的key为大写
  比如
  const obj = {
    'name': 111,
    'children': [{
      name: 1111
    }],
    eat: ['apple']
  }
  deepKey(obj, key => key.toLocaleUpperCase())
  转化后为
  {
    'NAME': 111,
    'CHILDREN': [{
      'NAME': 1111
    }],
    'EAT': ['apple']
  }
9、express中间间实现
10、eventEmit 实现
11、或者 html 所有的标签类型
12、驼峰格式 和 下划线格式转换
*/

/*
技术
1. 箭头函数和普通函数的区别？
2. 箭头函数能用 new 调用吗？为什么？ 1、没有自己的this，不能使用call.apply 2.没有prototype属性，new需要将对象的_proto_指向构造函数的prototype属性
3. 算法：有一篇小说有多段文字，每一段都是由单独接口请求得到，
    实现算法要求：接口请求时间不定，但内容必须要按顺序去渲染；要尽可能快的渲染，但第二段必须要在第一段落渲染完之后
4. 算法：有数据 [{name: '北京', version: '1.0'}, {name: '上海', version: '1.0'},{name: '北京', version: '2.0'}, ...]  
    name 可能有重复，但其版本号不一样，要求转换成 
    [{name: '北京1.0', version: '1.0'}, {name: '上海', version: '1.0'},{name: '北京2.0', version: '2.0'}, ...]

算法题是
给定一个无序数组，和一个目标值，判断该数组中是否存在两个元素相加等于该目标（查找速度越快越好）
三道实践题
1、数组数据解析，找到数组中符合条件元素的个数、以及在哪个属性下面
2、解析url，返回对象
3、实现一个模板渲染
*/
//  项目问题
/*
1. xx 项目的难点在哪里？你是如何解决的？有没有优化控件？准备怎么去做？ 分为业务难点和技术难点

2. 你做过或遇到的最难的问题是什么？你是如何去解决的？
*/