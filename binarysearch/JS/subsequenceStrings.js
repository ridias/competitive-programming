//https://binarysearch.com/problems/Subsequence-Strings

class Solution {
    solve(s1, s2) {
        
        let i = 0; 
        let j = 0;
        let count = 0;
        while(i < s1.length && j < s2.length){
            while(j < s2.length && s2[j] != s1[i]){
                j++
            }
            
            if(j < s2.length){
                if(s2[j] == s1[i]){
                    count++
                    j++
                }
            }
            
            i++
        }

        return count == s1.length
    }
}