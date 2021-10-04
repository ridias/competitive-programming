// https://binarysearch.com/problems/Almost-Same-Strings

class Solution {
    solve(words) {
        words.sort((a, b) => a.localeCompare(b))

        for(let i = 0; i < words.length; i++){
            for(let j = i + 1; j < words.length; j++){
                let count = 0
                for(let k = 0; k < words[i].length && count < 2; k++){
                    if(words[i][k] != words[j][k]){
                        count++
                    }
                }

                if(count <= 1) return true
            }
        }

        return false

    }
}