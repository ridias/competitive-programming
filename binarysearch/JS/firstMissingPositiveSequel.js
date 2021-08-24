//https://binarysearch.com/problems/First-Missing-Positive-Sequel

class Solution {
    solve(arr) {
        let foundOne = false
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == 1){
                foundOne = true
            }
            
            if(arr[i + 1] - arr[i] != 1 && arr[i + 1] > 0 && arr[i] > 0){
                return arr[i] + 1
            }
        }

        if(!foundOne) return 1

        return arr[arr.length - 1] + 1
    }
}