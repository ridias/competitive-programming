//https://binarysearch.com/problems/Anagram-Checks

class Solution {
    solve(s0, s1) {
        let map = {}
        if(s0.length != s1.length) return false
        for(let i = 0; i < s0.length; i++){
            map[s0[i]] == undefined ? map[s0[i]] = 1 : map[s0[i]] += 1
        }

        for(let i = 0; i < s1.length; i++){
            if(map[s1[i]] > 0){
                map[s1[i]] -= 1
            }else{
                return false
            }
        }

        return true
    }
}