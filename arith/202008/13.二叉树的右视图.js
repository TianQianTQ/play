/**199. 二叉树的右视图
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:

输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(!root) return []
  let queue = [root]                        
  let arr = []     // 用来存储每层最后个元素值
  while(queue.length > 0){
    let len = queue.length
    while (len) {
      let node = queue.shift()       // 取出队列第一个元素
      if(len === 1) arr.push(node.val)       // 当是 当前一层的最后一个元素时，把值加入arr
      if(node.left) queue.push(node.left)    // 继续往队列添加元素
      if(node.right) queue.push(node.right)
      len--;
    }
  }
  return arr;
}