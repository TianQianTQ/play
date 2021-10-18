/* 给定一个二叉树，检查它是否是镜像对称的。
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

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function getDiff(r1, r2) {
        if (!r1 && !r2) return true;
        if (!r1 || !r2) return  false;
        return r1.val === r2.val && getDiff(r1.left,r2.right) && getDiff(r1.right, r2.left);
    }
    return getDiff(root, root);
};
// 题解：
// 1、找到对称条件
// 2、对比的节点确定  copy一棵树，这棵树左侧与第二棵树右侧比较