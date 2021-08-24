//https://binarysearch.com/problems/Kth-Smallest-Element

class Solution {
    constructor(){
        this.count = 0
        this.response = -1
    }

    solve(nums, k) {
        var BTree = new TreeNode(nums[0], null, null)   

        for(let i = 1; i < nums.length; i++){
            this.insert(BTree, nums[i])
        }

        this.searchByKNode(BTree, k)
        return this.response
    }

    searchByKNode(root, k){
        if(root == null) {
            return;
        }
        this.searchByKNode(root.left, k)
        this.count += 1
        if(this.count - 1 == k) this.response = root.val
        this.searchByKNode(root.right, k)
    }

    insert(root, value){
        if(root == null){
            root = new TreeNode(value, null, null)
            return;
        }

        if(root.left == null && value <= root.val){
            root.left = new TreeNode(value, null, null)
            return;
        }

        if(root.right == null && value > root.val){
            root.right = new TreeNode(value, null, null)
            return;
        }

        if(value <= root.val){
            this.insert(root.left, value)
        }else{
            this.insert(root.right, value)
        }
    }
}

class TreeNode {
    constructor(val, left, right){
        this.val = val
        this.left = left
        this.right = right
    }
}