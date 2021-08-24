// https://leetcode.com/problems/design-circular-queue/

var LLNode = function(val, next){
    this.val = val
    this.next = next
}

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.capacity = k
    this.length = 0
    this.head = null
    this.tail = null
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.length >= this.capacity) return false
    
    if(this.head == null){
        this.head = new LLNode(value, null)
        this.tail = this.head
    }else{
        this.tail.next = new LLNode(value, null)
        this.tail = this.tail.next
    }
    
    this.length += 1
    
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.length == 0) return false
    
    if(this.head.next == null){
        this.head = null
        this.tail = null
    }else{
        this.head = this.head.next
    }
    
    this.length -= 1
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.length == 0) return -1
    return this.head.val
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.length == 0) return -1
    return this.tail.val
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.length == 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.length == this.capacity
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */