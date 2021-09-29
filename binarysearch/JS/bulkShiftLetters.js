// https://binarysearch.com/problems/Bulk-Shift-Letters

class Solution {
    solve(s, shifts) {
        
        for(let i = shifts.length - 2; i >= 0; i--){
            shifts[i] += shifts[i + 1] % 26
        }

        let result = ""
        for(let i = 0; i < s.length; i++){
            let posLetterInAlphabet = s[i].charCodeAt(0) - 97
            result += String.fromCharCode((posLetterInAlphabet + shifts[i]) % 26 + 97)
        }

        return result
    }
}