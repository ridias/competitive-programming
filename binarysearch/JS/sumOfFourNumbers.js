//https://binarysearch.com/problems/Sum-of-Four-Numbers

class Solution {
    solve(nums, k) {
        nums.sort((a, b) => a - b)
        
        for(let i = 0; i < nums.length; i++){
            
            for(let j = i + 1; j < nums.length; j++){
                let left = j + 1
                let right = nums.length - 1

                while(left < right){
                    let value = nums[i] + nums[j] + nums[left] + nums[right]
                    if(value == k){
                        return true
                    }else if(value < k){
                        left++
                    }else{
                        right--
                    }
                }
            }
        }

        return false
    }
}