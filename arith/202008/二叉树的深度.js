/** 剑指 Offer 55 - I. 二叉树的深度
输入一棵二叉树的根节点，求该树的深度。
从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
例如：

给定二叉树 [3,9,20,null,null,15,7]，
    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if  (!root) return 0;
  let arr = [];
  let k = 0;
  function deep(root, k) {
    if (!root.left && !root.right) { //  判断条件应为没有左右节点为结束
      arr.push(k);
    }
    if (root.left) {
      deep(root.left, k+1);
    }
    if (root.right) {
      deep(root.right, k+1);
    }
  }
  deep(root, 1); // 开始长度为1，即根节点
  return Math.max(...arr);
};

var maxDepth = function(root) {
  if(!root) return 0
  let max = 0
  function deepFun(node,d){
      if(!node.left&&!node.right){
          if(max<d) max = d // 每次比较最大的值存储起来 
      }
      if(node.left) deepFun(node.left,d+1)
      if(node.right) deepFun(node.right,d+1)
  }
  deepFun(root,1)
  return max
};