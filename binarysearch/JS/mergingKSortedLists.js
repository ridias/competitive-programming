//https://binarysearch.com/problems/Merging-K-Sorted-Lists

class Solution {
    solve(lists) {
        let result = []
        for(let i = 0; i < lists.length; i++){

            for(let j = 0; j < lists[i].length; j++){
                result.push(lists[i][j])
            }
        }

        return result.sort((a, b) => a - b)
    }
}