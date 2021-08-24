//https://binarysearch.com/problems/Minimum-Difference

class Solution {
    solve(lst0, lst1) {
        let min = Infinity
        lst0.sort((a, b) => a - b)
        lst1.sort((a, b) => a - b)

        let left0 = 0
        let left1 = 0

        while(left0 < lst0.length && left1 < lst1.length){
            let val = Math.abs(lst0[left0] - lst1[left1])
            if(min > val){
                min = val
            }

            if(lst0[left0] <= lst1[left1]){
                left0++
            }else{
                left1++
            }
        }

        return min
    }
}