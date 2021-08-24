// https://leetcode.com/problems/product-of-the-last-k-numbers/


var ProductOfNumbers = function() {
    this.list = []
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.list.push(num);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    let i = this.list.length - k
    let total = 1
    
    while(i < this.list.length){
        if(this.list[i] == 0) return 0
        total *= this.list[i]
        i++
    }
    
    return total
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */