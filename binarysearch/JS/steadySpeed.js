//https://binarysearch.com/problems/Steady-Speed

class Solution {
    solve(positions) {
        let max = 0
        let j = 0
        let previousConstant = Math.abs(positions[0] - positions[1])
        for(let i = 2; i < positions.length; i++){
            let constant = Math.abs(positions[i-1] - positions[i])
            if(constant != previousConstant){
                previousConstant = constant
                let subListLen = (i - 1) - j + 1
                if(max < subListLen) max = subListLen
                j = i - 1
            }
        }

        let subListLen = (positions.length - 1) - j + 1
        if(max < subListLen) max = subListLen
        return max
    }
}