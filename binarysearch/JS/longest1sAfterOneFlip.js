// https://binarysearch.com/problems/Longest-1s-After-One-Flip

class Solution {
    solve(s) {
        let lastIndexZero = -1
        let max = 0

        let index = 0
        let len = 0
        while(index < s.length){
            len++
            if(s[index] == "0") break
            index++
        }

        lastIndexZero = index
        max = len

        for(let i = index + 1; i < s.length; i++){

            if(s[i] == "0"){
                if(len > max) max = len
                len = i - lastIndexZero
                lastIndexZero = i
            }else{
                len++
            }
        }

        if(len > max) max = len
        return max
        
    }
}