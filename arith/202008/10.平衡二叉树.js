/** 剑指 Offer 55 - II. 平衡二叉树
输入一棵二叉树的根节点，判断该树是不是平衡二叉树。
如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
示例 1:
给定二叉树 [3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:
给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。
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
 * @return {boolean}
 */

const isBalanced = (root) => {
  let result = true;
  const recursion = (root) => {
    if (!root) {   // 如果没有下一个节点了，返回 0
      return 0;
    }
    const left = recursion(root.left) + 1;      //当前层 + 1
    const right = recursion(root.right) + 1;
    if (Math.abs(left - right) > 1) { // 比较两棵树的深度
      result = false;
    }
    return Math.max(left, right);  // 返回这棵树最深的深度
  };
  recursion(root); // 2. 递归这棵树
  return result; // 4. 返回结果
};

// 优先这个 ，一个求每个子树的深度，一个比较深度并返回结果
var isBalanced = function (root) {
  if (!root) return true;
  let left = deep(root.left)
  let right = deep(root.right);
  if (Math.abs(left - right) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
}
function deep(root) {
  if (!root) return 0;
  return Math.max(deep(root.left), deep(root.right)) + 1;
}