// https://binarysearch.com/problems/Palindromic-Anagram

class Solution {
    solve(s) {
        let map = {}

        for(let i = 0; i < s.length; i++){
            map[s[i]] == undefined ? map[s[i]] = 1 : map[s[i]] += 1
        }

        let countOdds = 0
        let keys = Object.keys(map)

        for(let i = 0; i < keys.length; i++){
            if(map[keys[i]] % 2 == 1 && countOdds == 0){
                countOdds++
            }else if(map[keys[i]] % 2 == 1){
                return false
            }
        }

        return true

    }
}