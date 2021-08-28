// https://binarysearch.com/problems/Longest-Substring-with-2-Distinct-Characters

class Solution {
    solve(s) {
        let map = {}
        let count = 0

        let left = 0
        let right = 0
        let max = 0
        
        while(right < s.length){

            if(map[s[right]] == undefined){
                map[s[right]] = 1
                count++
            }else if(map[s[right]] == 0){
                map[s[right]] += 1
                count++
            }else{
                map[s[right]] += 1
            }

            right++

            if(count <= 2 && max < right - left){
                max = right - left
            }


            while(count > 2 && left < s.length){
                if(map[s[left]] - 1 == 0){
                    count--
                }
                map[s[left]] -= 1
                left++
            }

            if(count <= 2 && max < right - left){
                max = right - left
            }
        }
        
        return max
    }
}