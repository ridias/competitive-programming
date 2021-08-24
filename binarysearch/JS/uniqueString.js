//https://binarysearch.com/problems/A-Unique-String

class Solution {
    solve(s) {
        let set = new Set()
        for(let i = 0; i < s.length; i++){
            if(set.has(s[i])){
               return false 
            }
            set.add(s[i])
        }

        return true
    }
}