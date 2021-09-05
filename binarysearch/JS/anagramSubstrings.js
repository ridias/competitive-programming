// https://binarysearch.com/problems/Anagram-Substrings

class Solution {
    solve(s0, s1) {
        if(s0.length > s1.length) return 0
        let map = {}
        let used = 0
        let total = 0


        for(let i = 0; i < s0.length; i++){
            map[s0[i]] == undefined ? map[s0[i]] = [0, 1] : map[s0[i]][1] += 1
        }

        for(let i = 0; i < s0.length; i++){
            if(map[s1[i]] != undefined){
                if(map[s1[i]][0] < map[s1[i]][1]){
                    used++
                }
                map[s1[i]][0] += 1
            }
        }

        if(used == s0.length){
            total++
        }

        for(let i = s0.length; i < s1.length; i++){
            if(map[s1[i - s0.length]] != undefined){
                if(map[s1[i- s0.length]][0] <= map[s1[i- s0.length]][1]){
                    used--
                }
                map[s1[i- s0.length]][0] -= 1
            }

            if(map[s1[i]] != undefined){
                if(map[s1[i]][0] < map[s1[i]][1]){
                    used++
                }
                map[s1[i]][0] += 1
            }

            if(s0.length == used) total++
        }

        return total
    }
}