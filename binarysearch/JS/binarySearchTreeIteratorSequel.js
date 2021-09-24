// https://binarysearch.com/problems/Binary-Search-Tree-Iterator-Sequel

/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */

 function preorder(root, result){
    if(root == null) return;

    preorder(root.left, result)
    result.push(root.val)
    preorder(root.right, result)
}

class BSTIterator {
    constructor(root) {
        this.arr = []
        preorder(root, this.arr)
        this.i = -1;
    }

    next() {
        this.i++
        return this.arr[this.i]    
    }

    hasnext() {
        return this.i + 1 < this.arr.length
    }

    prev() {
        this.i--
        return this.arr[this.i]       
    }

    hasprev() {
        return this.i - 1 >= 0
    }
}