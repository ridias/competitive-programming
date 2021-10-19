// https://binarysearch.com/problems/Bounce

class Solution {
    solve(nums, k) {
        if(nums.length - 1 == k) return true
                
        let visited = {}
        let queue = [k]
        visited[k] = 1

        while(queue.length > 0){
            let pos = queue.shift()
            let val = nums[pos]

            if(nums[pos] + pos == nums.length - 1){
                return true
            }else{
                let nextPos = nums[pos] + pos
                let previousPos = pos - nums[pos]
                if(previousPos >= 0 && !visited[previousPos]){
                    queue.push(previousPos)
                    visited[previousPos] = 1
                }

                if(nextPos < nums.length && !visited[nextPos]){
                    queue.push(nextPos)
                    visited[nextPos] = 1
                }
            }
        }

        return false
        
    }
}