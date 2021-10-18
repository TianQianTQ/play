/** 剑指 Offer 32 - III. 从上到下打印二叉树 III
  请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，
  第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
例如:
给定二叉树: [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [20,9],
  [15,7]
] */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  let res = [];
  let queue = [root];
  let level = 1;
  while (queue.length) {
    let temp = [];
    let next = [];
    while (queue.length) {
      let item = queue.shift();
      if (level % 2 === 1) {
        temp.push(item.val)
      } else {
        temp.unshift(item.val);
      }
      if (item.left) {
        next.push(item.left);
      }
      if (item.right) {
        next.push(item.right);
      }
    }
    queue = next;
    res.push(temp);
    level++;
  }
  return res;
};
// 添加一个变量控制次数，依照1  push 2 unshift规律来