/*
给定一个二叉树的根节点 root ，返回它的 中序 遍历。
输入：root = [1,null,2,3]
输出：[1,3,2]

示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
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
 * @return {number[]}
 */
// 中序遍历:左-》中 -》右
var inorderTraversal = function(root) {
    let res = [];
    function tran(root) {
        if (!root) return;
        tran(root.left);
        res.push(root.val);
        tran(root.right);
    }
    tran(root);
    return res;
};

// 题解：
// 1、递归
// 2、中序遍历  中 左 右 
// 3、注意停止循环条件