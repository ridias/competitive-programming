// https://binarysearch.com/problems/Number-of-Bits

class Solution {
    solve(n) {
        n = n.toString(2)
        let count = 0
        for(let i = 0; i < n.length; i++){
            if(n[i] == "1") count++
        }
        return count
    }
}
