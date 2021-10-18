/*
给定一个二叉树，返回它的 后序 遍历。
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
var postorderTraversal = function(root) {
    let res = [];
    function tra(root) {
        if (!root) return;
        tra(root.left);
        tra(root.right);
        res.push(root.val);
    }
    tra(root);
    return res;
};

// 题解：
// 1、后序遍历：左右中