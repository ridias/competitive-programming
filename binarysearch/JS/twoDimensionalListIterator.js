// https://binarysearch.com/problems/Two-Dimensional-List-Iterator

class TwoDimensionalIterator {
    constructor(lists) {
        this.index = 0
        this.nextIndex = 0
        this.matrix = lists
    }

    next() {
        this.skipEmptyArrays()

        if(this.index < this.matrix.length){
            if(this.nextIndex < this.matrix[this.index].length){
                let val = this.matrix[this.index][this.nextIndex]
                this.nextIndex++
                if(this.nextIndex >= this.matrix[this.index].length){
                    this.index += 1;
                    this.nextIndex = 0;
                }
                return val
            }
        }
    }

    hasnext() {
        this.skipEmptyArrays()

        if(this.index >= this.matrix.length){
            return false
        }

        return true
    }

    skipEmptyArrays(){
        while(this.index < this.matrix.length){
            if(this.matrix[this.index].length == 0){
                this.index++
            }else{
                break;
            }
        }
    }

    
}