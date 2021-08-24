//https://binarysearch.com/problems/3-6-9

class Solution {
    solve(n) {
        let arr = []

        for(let i = 1; i <= n; i++){
            if(i % 3 == 0 || this.hasDigit369(i)){
                arr.push('clap')
            }else{
                arr.push(i + "")
            }
        }

        return arr
    }

    hasDigit369(n){
        while(n > 0){
            let digit = n % 10
            if(digit == 3 || digit == 6 || digit == 9) return true
            n = Math.floor(n / 10)
        }

        return false
    }
}