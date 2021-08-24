//https://binarysearch.com/problems/Set

class CustomSet {
    constructor() {
        this.set = new Set()
    }

    add(val) {
        this.set.add(val)
    }

    exists(val) {
        return this.set.has(val)
    }

    remove(val) {
        this.set.delete(val)
    }
}