// https://binarysearch.com/problems/Triangle-Triplets

class Solution {
    solve(nums) {
        
        let count = 0
        nums.sort((a, b) => a - b)

        for(let i = 0; i < nums.length; i++){

            for(let j = i + 1; j < nums.length; j++){

                for(let k = j + 1; k < nums.length; k++){

                    let val = nums[i] + nums[j]
                    if(val > nums[k]){
                        count++
                    }else{
                        break;
                    }
                }
            }
        }

        return count
    }
}