// https://binarysearch.com/problems/Longest-Repeating-Substring

class Solution {
    solve(s) {
        let max = 0
        for(let i = 0; i < s.length; i++){

            for(let j = i + 1; j < s.length; j++){

                if(s[i] == s[j]){
                    let x = i + 1
                    let y = j + 1
                    let count = 1
                    while(x < s.length && y < s.length){
                        if(s[x] == s[y]){
                            count++
                        }else{
                            break
                        }

                        x++
                        y++
                    }

                    if(max < count) max = count
                }
            }
        }

        return max
    }
}