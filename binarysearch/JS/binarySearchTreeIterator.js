//https://binarysearch.com/problems/Binary-Search-Tree-Iterator

/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
 class BSTIterator {
    constructor(root) {
        this.stack = []

        while(root != null){
            this.stack.push(root)
            root = root.left
        }
    }

    next() {
        let node = this.stack.pop()
        let val = node.val
        if(node.right != null){
            this.stack.push(node.right)
            node = node.right
            while(node != null){
                if(node.left != null) this.stack.push(node.left)
                node = node.left
            }
        }

        return val
    }

    hasnext() {
        return this.stack.length > 0
    }
}