/**
 * Initialize your data structure here.
 */
 var MyQueue = function() {
    this.stack = []
    this.stackPop = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if(this.stackPop.length > 0){
        this.stack = []
        while(this.stackPop.length > 0){
            this.stack.push(this.stackPop.pop())
        }
    }
    
    this.stack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.stack.length > 0){
        this.stackPop = []
        while(this.stack.length > 0){
            this.stackPop.push(this.stack.pop())
        }
    }
    
    return this.stackPop.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.stack.length > 0){
        return this.stack[0]
    }else if(this.stackPop.length){
        return this.stackPop[this.stackPop.length - 1]
    }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length == 0 && this.stackPop.length == 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */