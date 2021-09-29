// https://binarysearch.com/problems/Count-Substrings-With-All-1s

class Solution {
    solve(s) {
        let substrings = 0
        let acc = 1

        for(let i = 0; i < s.length; i++){
            if(s[i] == "1"){
                substrings += acc
                acc++
            }else{
                acc = 1
            }
        }

        return substrings
    }
}