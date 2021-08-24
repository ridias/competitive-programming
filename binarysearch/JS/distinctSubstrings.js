class Solution {
    solve(s) {
        let set = new Set()
        for(let i = 0; i < s.length; i++){
            let w = s[i]
            set.add(w)
            for(let j = i + 1; j < s.length; j++){
                w += s[j]
                set.add(w)
            }
        }

        return set.size
    }
}