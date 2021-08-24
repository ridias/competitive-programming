//https://binarysearch.com/problems/Odd-Number-of-Digits

class Solution {
    solve(nums) {
        
        let count = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] < 10) count++
            else{
                let countDigits = 0
                let n = nums[i]
                while(n > 0){
                    countDigits++
                    n = Math.floor(n / 10)
                }
                if(countDigits % 2 == 1) count++
            }
        }

        return count;
    }
}