/* 总结:
  稳定排序：冒泡排序、归并 排序、插入排序、基数排序
  不稳定排序：快排
*/
// 交换类排序
// 冒泡排序  -- 快速排序
// 1、冒泡排序   相邻比逆法
// 时间复杂度：O(N^2) -O(N)   空间复杂度O(1)
// 第一趟比较0 和1是否逆序，是就交换，第一遍遍历将最大的数字放在最后，然后比较第二趟，直到所有数字都顺序
const sort = (arr) => {
  for (let i = 0; i < arr.length-1; i++) {
    for (let j=0; j< arr.length-i-1;j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr;
}
// 优化 添加标志位，若无发生逆序，说明已经是有序的，不用再继续下面的循环交换
const sort = (arr) => {
  for (let i=0,flag=1;i<arr.length-1&&flag==1;i++) {
    flag = 0;
    for (let j= 0;j< arr.length-1-i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        flag = 1;
      }
    }
  }
  return arr;
}

/* 2、快速排序
*  思想：从数组中随机选择一个记录，将比这个数字大的都放在后面，比这个数字小的都放在前面，
*      通过一趟排序，将乱序的数组分割成两部分，其中一部分比另一部分的数字都要小
*      按 此方法对这两部分数据进行快排，递归进行，直到每个子序列都只有一个记录为止
*/

function sort(arr, left, right) {
  if (left < right) {
    let key = arr[left];
    let i = left, j = right;
    while (i < j) {
      // 定义两个位置指针，从头开始遍历
      // j位置的值与key比较 ，若大于key则不变，若小于与i的值交换
      while (i < j && arr[j] >= key) j--;  //右指针从右向左扫描，碰到第一个小于基准数的时候停住
      while(i < j && arr[i] <= key) i++; //左指针从左向右扫描，碰到第一个大于基准数的时候停住
      [arr[i], arr[j]] = [arr[j], arr[i]]; //交换左右指针所停位置的数
    }
    //最后交换基准数与指针相遇位置的数
    [arr[left], arr[i]] = [arr[i], arr[left]];
    sort(arr,left,i-1);
    sort(arr,i+1,right);
  }
  return arr;
}
let arr = [2,3,5,4,1,8];
console.log(sort(arr, 0, arr.length-1))
/** 3、插入排序 - 打扑克
 * 基于顺序查找 时间复杂度：O（n 2） 空间复杂度：O(1)    稳定性：稳定
 *  每次将一个数插入到有序数组中
 */
function sort(arr) {
  let j, temp;
  for (let i = 1; i < arr.length; i++) {
    j = i-1;
    temp = arr[i];
    // 如果前面位置的值比标记位的值大，则向后移，将标记位的值放在移之后空的位置
    while (j >= 0 && arr[j] > temp) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = temp;
  }
  return arr;
}
/** 4、希尔排序
 * 缩小增量排序 O（n 3/2）或是O（n 2）  空间复杂度：O（1） 稳定性：不稳定
 * 
 */
function sort(arr) {
  let temp, d = 1;
  while (d < arr.len /3) {
    d = d * 3 +1;
  }
  for (d; d>0; d = Math.floor(d/3)) {
    for (let  i=d; i < arr.length; i++) {
      if (arr[i] < arr[i-d]) {
        temp = arr[i];
        for  (let j = i-d; j>+0 && arr[j] > temp; j-=d) {
          arr[j+d] =  arr[j];
        }
        arr[j+d] = temp;
      }
    }
  }
  return arr;
}
/** 5、选择排序
 *   时间复杂度O(n^2)  空间复杂度O(1)
 * 第一趟：将后面的跟第一个比较，找出最小的和第一个记录交换。。。
 */
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let k = i;
    for (let j = i+1; j < arr.length; j++)  {
      if (arr[k] > arr[j]) {
        k = j;  // k始终指向最小的位置
      }
    }
    if (i !== k) { // 循环结束后判断 是否交换
      [arr[i], arr[k]] = [arr[k], arr[i]]
    }
  }
  return arr;
}
/** 6、堆排序
 * 时间复杂度O(nlogn)   空间复杂度O(1)
 * 存储：分为大顶堆和小顶堆
 * 概念： i节点的父节点为(i-1)/2 左右子节点为：2i+1 2i+2
 * 每次将最小或最大的顶放在最有一个叶子节点处，然后将叶子节点的数据放在顶端，
 * 比较顶端与其左右子树的大小并进行相应交换，然后进行相应的交换
 */
function sort(arr,i,length) {
  let temp = arr[i]; // 顶
  for (let j=i*2+1;j<length;j=j*2+1) { // 倒数第一个非叶子节点的左节点
    if (j+1 <length ** arr[j] < arr[j+1]) { // 如果有右节点并且左节点小于右节点
      j++;  //  j的值为该非叶子节点的最大子节点
    }
    if(temp > arr[j]) {
      break;
    }
    arr[i] = arr[j];
    arr[j] = temp;
    i = j; // 将i指向最大的子节点，沿被破坏的路径继续调整
  }
}
function create(arr) {
  for (let i=arr.length/2-1;i>=0;i--) { // 从倒数第一个非叶子节点开始
    sort(arr,i,arr.length); // 建立大顶堆/小顶堆
  }
  for (let j = arr.length-1;j>0;j--) {
    let temp = arr[j];
    arr[j] = arr[0];
    arr[0] = temp;
    soet(arr,0,j);
  }
  return arr;
}
/** 7、归并排序 - 分治法
 * 平均时间复杂度O(nlogn) 空间复杂度O(n)
 * 二路归并排序 将初始序列的n个记录看作是n个有序的子序列，每个子序列长度为1，
 * 然后两两归并，得到n/2个长度为2的有序子序列，再对长度为2的有序子序列进行归并，
 * 直到得到一个长度为n的有序子序列为止
 */
function merge(left, right) {
  let result = [];
  while(left.length >0 && right.length >0) {
    if(left[0] <=right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while(left.length) {
    result.push(left.shift());
  }
  while(right.length) {
    result.push(right.shift())
  }
  return result;
}
function mergeSort(arr) {
  if (arr.length <2) return arr;
  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0,middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}





