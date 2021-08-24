//https://binarysearch.com/problems/FizzBuzz

class Solution {
    solve(n) {
        let arr = new Array(n).fill("")
        for(let i = 1; i <= n; i++){
            if(i % 3 == 0) arr[i-1] += "Fizz"
            if(i % 5 == 0) arr[i-1] += "Buzz"

            if(i % 3 && i % 5) arr[i-1] += i
        }
        return arr
    }
}