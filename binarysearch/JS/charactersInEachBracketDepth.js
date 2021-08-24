//https://binarysearch.com/problems/Characters-in-Each-Bracket-Depth

class Solution {
    solve(s) {
        let result = []
        let left = 0
        for(let i = 0; i < s.length; i++){
            if(s[i] == "("){
                left++
            }else if(s[i] == "X"){
                result[left - 1] == null ? 
                    result[left - 1] = 1 : 
                    result[left - 1] += 1 
            }else{
                if(result[left - 1] == null){
                    result[left - 1] = 0
                }
                left--
            }
        }

        return result
    }
}