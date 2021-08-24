// https://leetcode.com/problems/design-linked-list/

var LLNode = function(val, next){
    this.val = val
    this.next = next
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.length = 0
    this.head = null
    this.tail = null
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(this.length <= index) return -1
    
    let list = this.head
    let count = 0
    while(list != null && count < index){
        list = list.next
        count++
    }
    
    return list.val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if(this.head == null){
        this.head = new LLNode(val, null)
        this.tail = this.head
    }else{
        let node = new LLNode(val, this.head)
        this.head = node
    }
    
    this.length += 1
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head == null){
        this.head = new LLNode(val, null)
        this.tail = this.head
    }else{
        this.tail.next = new LLNode(val, null)
        this.tail = this.tail.next
    }
    
    this.length += 1
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this.length) return;
    
    if(index == this.length) {
        this.addAtTail(val)
        return;   
    }
    
    if(index == 0) {
        this.addAtHead(val)
        return;
    }
    
    let list = this.head
    let count = 0
    while(list != null){
        
        if(count + 1 == index){
            let tmp = list.next
            list.next = new LLNode(val, tmp)
            break;
        }else{
            list = list.next
            count++
        }
    }
    
    this.length += 1
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(this.head == null) return;
    if(this.length <= index) return;
    
    if(index == 0 && this.length == 1){
        this.head = null
        this.tail = null
    }else if(index == 0){
        this.head = this.head.next
    }else{
        let count = 0
        let list = this.head
        while(list != null){
            if(count + 1 == index){
                let tmp = list.next.next
                list.next.next = null
                list.next = tmp
                if(list.next == null) this.tail = list
                break;
            }else{
                list = list.next
                count++
            }
        }
    }
    
    this.length -= 1
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */