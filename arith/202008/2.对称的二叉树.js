/*剑指 Offer 28. 对称的二叉树
请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
    1
   / \
  2   2
   \   \
   3    3
示例 1：

输入：root = [1,2,2,3,4,4,3]
输出：true
示例 2：

输入：root = [1,2,2,null,3,null,3]
输出：false
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
var isSymmetric = function(root) {
  function isMirror(r1, r2) {
    if(!r1 && !r2) return true
    if(!r1 || !r2) return false
    return r1.val === r2.val && isMirror(r1.left, r2.right) && isMirror(r1.right, r2.left)
  }
  return isMirror(root, root)
};
// 思路一样，开始直接将两个节点都置为root
var isSymmetric = function(root) {
  if (!root) return true;
  return dfs(root.left, root.right); 
};
function dfs (left, right) {
  if (!left && !right) return  true;
  if (!left || !right) return false;
  if (left.val !== right.val) return  false;
  return dfs(left.left,right.right)   && dfs(left.right, right.left);
}
// 如果没有返回true  然后循环遍历左右子树，注意条件判断