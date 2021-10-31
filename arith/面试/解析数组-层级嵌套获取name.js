/*
const data = [
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
  */
let getAllNames = (arr) => {
    let res = arr.reduce((pre, cur) => {
        return cur.children ? pre.concat(cur.name, getAllNames(cur.children)) : pre.concat(cur.name);
    }, []);
    return res;
}