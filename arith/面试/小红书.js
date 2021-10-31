// 用递归方式生成一个数组，使得此数组长度为10，且元素的随机数是在2-40之间不重复的值

// length 10 [2, 40]
const getArr = (arr = []) => {
    /*let length = 10, max = 40, min = 2;
    let arr = Array(length).fill(0);
    for (let i = 0; i < length; i++) {
        let item = Math.random() * (max - min) + (min);
        arr[i] = item;
    }
    return arr;
    */
    let length = 10, max = 40, min = 2;
    if (arr.length < length) {
        let item = parseInt(Math.random() * (max - min) + (min));
        arr.push(item);
        return getArr(arr);
    } else {
        return arr;
    }
}
print(getArr());

// 已知数据格式，实现一个函数 fn ，给一个 id 找出链条中其对应的所有的父级 id

const cityData = [
    {
        id: 'axzx',
        name: '广东省',
        children: [
            {
                id: 'sdsd',
                name: '深圳市',
                children: [
                    {
                        id: '45dss',
                        name: '南山区'
                    },
                    {
                        id: 'sdsd11',
                        name: '福田区',
                        children: [{
                            id: 'ddrr2',
                            name: 'A街道'
                        }]
                    }
                ]
            },
            {
                id: '2323d',
                name: '东莞市',
                children: [
                    {
                        id: 'xxs2',
                        name: 'A区'
                    },
                    {
                        id: 'kklio2',
                        name: 'B区',
                    }
                ]
            }
        ]
    }];
    // 数据结构
// {
//     广东id: [],
//     深圳id: [广东id]
// 	   南山 id： 【广东 深圳】
// }