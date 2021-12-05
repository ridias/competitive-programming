// https://binarysearch.com/problems/Add-Binary-Numbers

class Solution {
    solve(a, b) {
        let carry = 0
        let result = ""
        for(let i = 0; i < a.length && i < b.length; i++){
            let digit = parseInt(a[a.length - i - 1])
            let digit2 = parseInt(b[b.length - i - 1])
            let val = carry + digit + digit2
            carry = this.getCarry(val)
            result = (val % 2) + result
        }

        let pos = Math.min(a.length, b.length)

        while(a.length > pos){
            let digit = parseInt(a[a.length - pos - 1])
            let val = carry + digit
            carry = this.getCarry(val)
            result = (val % 2) + result
            pos++
        }

        while(b.length > pos){
            let digit = parseInt(b[b.length - pos - 1])
            let val = carry + digit
            carry = this.getCarry(val)
            result = (val % 2) + result
            pos++
        }

        if(carry > 0) result = 1 + result

        return result
    }

    getCarry(val){
        return val == 3 || val == 2 ? 1 : 0
    }
}