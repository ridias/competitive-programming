//https://binarysearch.com/problems/Look-and-Say

class Solution {
    solve(n) {
        let s = "1"

        while(n - 1 > 0){
            let r = ""
            let previous = s[0]
            let count = 1
            for(let i = 1; i < s.length; i++){
                if(s[i] == previous){
                    count++
                }else{
                    r += count + previous
                    previous = s[i]
                    count = 1
                }
            }

            if(count > 0){
                r += count + previous
            }
            s = r
            n--
        }

        return s
    }
}