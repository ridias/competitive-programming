//https://binarysearch.com/problems/Last-Value-Map

class LastValueMap {
    constructor() {
        this.map = {}
        this.stack = []
    }

    set(key, value) {
        this.map[key] = value
        this.stack.push(key)
    }

    remove(key) {
        if(this.map[key] != undefined){
            while(key == this.stack[this.stack.length - 1]){
                this.stack.pop();
            }

            delete this.map[key]
        }
    }

    getLast() {
        let key = this.stack[this.stack.length - 1]
        if(key == null) return null
        if(this.map[key] == undefined) return null
        return this.map[key]
    }
}