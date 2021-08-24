//https://binarysearch.com/problems/Rotate-List-Left-by-K

class Solution {
    solve(nums, k) {
        k = k % nums.length
        let middle = Math.floor(nums.length / 2)

        while(k > 0 && k < nums.length){
            if(middle <= k){
                nums.unshift(nums.pop())
                k++
            }else{
                nums.push(nums.shift())
                k--
            }
        }
        
        return nums
    }
}