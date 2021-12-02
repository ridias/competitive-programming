// https://binarysearch.com/problems/K-Longest-Show-Durations

class Solution {
    solve(shows, durations, k) {
        let map = {}

        for(let i = 0; i < shows.length; i++){
            if(map[shows[i]] == undefined){
                map[shows[i]] = durations[i]
            }else{
                map[shows[i]] += durations[i]
            }
        }

        let keys = Object.keys(map)
        let values = []
        for(let i = 0; i < keys.length; i++){
            values.push(map[keys[i]])
        }

        values.sort((a, b) => b - a)
        let sum = 0
        for(let i = 0; i < k; i++){
            sum += values[i]
        }

        return sum
    }
}