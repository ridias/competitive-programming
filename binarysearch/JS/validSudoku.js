// https://binarysearch.com/problems/Sudoku-Validator

class Solution {
    solve(matrix) {
        for(let i = 0; i < matrix.length; i++){
            let set = new Set()
            for(let j = 0; j < matrix[i].length; j++){
                if(matrix[i][j] < 1 || matrix[i][j] > 9) return false
                if(set.has(matrix[i][j])) return false
                set.add(matrix[i][j])
            }

            if(set.size != 9) return false
        }

        for(let j = 0; j < matrix[0].length; j++){
            let set = new Set()
            for(let i = 0; i < matrix.length; i++){
                if(matrix[i][j] < 1 || matrix[i][j] > 9) return false
                if(set.has(matrix[i][j])) return false
                set.add(matrix[i][j])
            }
            if(set.size != 9) return false
        }

        for(let i = 0; i < matrix.length - 3; i += 3){
            for(let j = 0; j < matrix[i].length - 3; j+= 3){
                let set = new Set()
                if(!this.isInRange(matrix[i][j]) || set.has(matrix[i][j])) return false
                set.add(matrix[i][j])
                
                if(!this.isInRange(matrix[i+1][j]) || set.has(matrix[i+1][j])) return false
                set.add(matrix[i+1][j])

                if(!this.isInRange(matrix[i+2][j]) || set.has(matrix[i+2][j])) return false
                set.add(matrix[i+2][j])

                if(!this.isInRange(matrix[i][j+1]) || set.has(matrix[i][j+1])) return false
                set.add(matrix[i][j+1])

                if(!this.isInRange(matrix[i+1][j+1]) || set.has(matrix[i+1][j+1])) return false
                set.add(matrix[i+1][j+1])

                if(!this.isInRange(matrix[i+2][j+1]) || set.has(matrix[i+2][j+1])) return false
                set.add(matrix[i+2][j+1])

                if(!this.isInRange(matrix[i][j+2]) || set.has(matrix[i][j+2])) return false
                set.add(matrix[i][j+2])

                if(!this.isInRange(matrix[i+1][j+2]) || set.has(matrix[i+1][j+2])) return false
                set.add(matrix[i+1][j+2])

                if(!this.isInRange(matrix[i+2][j+2]) || set.has(matrix[i+2][j+2])) return false
                set.add(matrix[i][j])
            }
        }


        return true;
    }

    isInRange(value){
        return value >= 1 && value <= 9
    }
}