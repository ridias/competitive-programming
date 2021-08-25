// https://binarysearch.com/problems/K-Unique-String

class Solution {
    solve(s, k) {
        let distinct = 0
        let map = {}

        for(let i = 0; i < s.length; i++){
            if(map[s[i]] == undefined){
                map[s[i]] = [s[i], 1]
                distinct += 1
            }else{
                map[s[i]][1] += 1
            }
        }

        if(distinct < k) return 0
        let keys = Object.keys(map)
        let letters = []

        for(let i = 0; i < keys.length; i++){
            letters.push(map[keys[i]])
        }
        
        letters.sort((a, b) => b[1] - a[1])
        let changes = 0
        while(distinct > k){
            let letter = letters.pop()
            changes += letter[1] 
            distinct--
        }

        return changes
    }
}