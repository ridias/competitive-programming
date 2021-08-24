//https://binarysearch.com/problems/List-Partitioning

class Solution {
    solve(strs) {
        let reds = []
        let greens = []
        let blues = []

        for(let i = 0; i < strs.length; i++){
            if(strs[i] == "red"){
                reds.push(strs[i])
            }else if(strs[i] == "green"){
                greens.push(strs[i])
            }else{
                blues.push(strs[i])
            }
        }

        while(greens.length > 0){
            reds.push(greens.pop())
        }

        while(blues.length > 0){
            reds.push(blues.pop())
        }

        return reds
    }
}