// https://binarysearch.com/problems/Largest-Anagram-Group

class Solution {
    solve(words) {
        let max = 1
        let visited = {}
        
        for(let i = 0; i < words.length; i++){
            words[i] = words[i].split("").sort((a, b) => a.localeCompare(b)).join("")
        }

        words.sort((a, b) => a.localeCompare(b))
        let previous = words[0]
        let count = 1
        for(let i = 1; i < words.length; i++){
            if(words[i] == previous){
                count++
            }else{
                if(max < count) max = count
                previous = words[i]
                count = 1
            }
        }

        if(count > max) max = count

        return max
    }
}