// https://binarysearch.com/problems/String-Isomorphism

class Solution {
    solve(s, t) {
        let map = {}
        let used = new Set()
        if(s.length != t.length) return false

        for(let i = 0; i < s.length; i++){
            if(map[s[i]] == undefined && !used.has(t[i])){
                map[s[i]] = t[i];
                used.add(t[i])
            }else if(map[s[i]] != t[i]){
                return false
            }
        }

        return true
    }
}