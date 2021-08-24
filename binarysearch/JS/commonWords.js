//https://binarysearch.com/problems/Common-Words

class Solution {
    solve(s0, s1) {
        if(s0.length == 0 && s1.length == 0) return 0
        s0 = s0.toLowerCase().split(' ')
        s1 = s1.toLowerCase().split(' ')
        let count = 0
        let set = new Set()
        for(let i = 0; i < s0.length; i++){
            set.add(s0[i])
        }

        for(let i = 0; i < s1.length; i++){
            if(set.has(s1[i])){
                count += 1
                set.delete(s1[i])
            }
        }

        return count
    }
}