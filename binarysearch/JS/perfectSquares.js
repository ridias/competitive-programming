//https://binarysearch.com/problems/Perfect-Squares

class Solution {
    solve(n) {
        let squares = []
        let limit = Math.round(Math.sqrt(n))
        let memo = {}
        for(let i = 1; i <= limit; i++){
            squares.push(i * i)
        }

        return this.recursion(n, squares, memo)
    }

    recursion(num, squares, memo){
        if(memo[num] != undefined) return memo[num]
        if(num <= 3) return num

        let result = num
        for(let i = 1; i < squares.length; i++){
            let nextNum = num - squares[i]
            if(nextNum >= 0){
                result = Math.min(result, 1 + this.recursion(nextNum, squares, memo))
            }
        }

        memo[num] = result
        return result
    }
}