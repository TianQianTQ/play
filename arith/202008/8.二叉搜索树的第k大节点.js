/** 剑指 Offer 54. 二叉搜索树的第k大节点
给定一棵二叉搜索树，请找出其中第k大的节点。
示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
/** 题解
 * 1、中序遍历： 左中右 ,然后反转数组取第k-1个数
 * 2、逆中序遍历  右中左第k个数
 */
var kthLargest = function(root, k) {
  if  (!root) return null;
  let arr = [];
  arr = dfs(root, arr);
  function dfs(root, arr) {
    if (!root) return;
    dfs(root.left, arr);
    arr.push(root.val);
    dfs(root.right, arr);
    return arr;
  }
  return arr.reverse()[k-1];
};

var kthLargest = function(root, k) {
  let res
  function dfs(n) {
      if (!n) return
      dfs(n.right)
      if (!--k) {
          res = n.val
          return
      }
      dfs(n.left)
  }
  dfs(root)
  return res
};