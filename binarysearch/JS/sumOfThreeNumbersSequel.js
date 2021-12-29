// https://binarysearch.com/problems/Sum-of-Three-Numbers-Sequel

class Solution {
    solve(nums, k) {

        let min = Infinity
        nums.sort((a, b) => a - b)
        
        for(let i = 0; i < nums.length; i++){

            for(let j = i + 1; j < nums.length; j++){

                for(let l = j + 1; l < nums.length; l++){
                    let val = nums[i] + nums[j] + nums[l]
                    if(val > k && val - k > min) break;
                    if(Math.abs(val - k) < min) min = Math.abs(val - k)
                }
            }
        }

        return min
    }
}
