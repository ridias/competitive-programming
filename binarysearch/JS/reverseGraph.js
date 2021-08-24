//https://binarysearch.com/problems/Reverse-Graph

class Solution {
    solve(graph) {
        let res = []

        for(let i = 0; i < graph.length; i++){
            res.push([])
        }

        for(let i = 0; i < graph.length; i++){

            for(let j = 0; j < graph[i].length; j++){
                res[graph[i][j]].push(i)
            }
        }

        return res
    }
}