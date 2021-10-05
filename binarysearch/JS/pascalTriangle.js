// https://binarysearch.com/problems/Pascal's-Triangle

class Solution {
    solve(n) {
        if(n == 0) return [1]
        if(n == 1) return [1, 1]

        let result = [1,1]
        while(n > 1){
            let aux = new Array(result.length + 1).fill(1)
            for(let i = 1; i < aux.length - 1; i++){
                aux[i] = result[i - 1] + result[i]
            }

            result = [...aux] 
            n--
        }

        return result
    }
}