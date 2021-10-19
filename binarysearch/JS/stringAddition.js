// https://binarysearch.com/problems/String-Addition

class Solution {
    solve(a, b) {
        
        let result = ""
        let carry = 0
        let i = 0

        while(i < a.length && i < b.length){
            let val = parseInt(a[a.length - 1 - i])
            let val2 = parseInt(b[b.length - 1 - i])
            let num = (val + val2 + carry)
            result = (num % 10) + result
            carry = num > 9 ? 1 : 0
            i++
        }

        while(i < a.length){
            let digit = parseInt(a[a.length - 1 - i]) + carry
            result = (digit % 10) + result
            carry = digit > 9 ? 1 : 0
            i++
        }

        while(i < b.length){
            let digit = parseInt(b[b.length - 1 - i]) + carry
            result = (digit % 10) + result
            carry = digit > 9 ? 1 : 0
            i++
        }

        if(carry == 1) result = 1 + result
        return result
    }
}