//https://binarysearch.com/problems/Line-Segment

class Solution {
    solve(coordinates) {
        
        let m = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0])
        let b = coordinates[0][1] - (coordinates[0][0] * m)

        
        for(let i = 1; i < coordinates.length; i++){
            if(coordinates[i][1] != coordinates[i][0] * m + b)
                return false
        }

        return true
    }
}