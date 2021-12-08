// https://binarysearch.com/problems/Number-of-Palindromic-Substrings

class Solution {
    solve(s) {
        let sum = s.length

        for(let i = 0; i < s.length; i++){
            let left = i - 1
            let right = i + 1

            while(left >= 0 && right < s.length){
                if(s[left] == s[right]){
                    sum++
                }else{
                    break;
                }

                left--
                right++
            }
        }

        for(let i = 0; i < s.length; i++){
            let left = i
            let right = i + 1

            while(left >= 0 && right < s.length){
                if(s[left] == s[right]){
                    sum++
                }else{
                    break;
                }

                left--
                right++
            }
        }

        return sum;
    }
}
