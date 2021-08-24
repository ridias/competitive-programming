//https://binarysearch.com/problems/Largest-Island-Area

class Solution {
    solve(matrix) {
        let max = 0
        let visited = {}
        let p = [[0, -1], [0, 1], [1, 0], [-1, 0]]
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                if(matrix[i][j] == 1){
                    let queue = [[i, j]]
                    let count = 0
                    visited[i + ";" + j] = 1

                    while(queue.length > 0){
                        let pos = queue.shift()
                        let x = pos[0]
                        let y = pos[1]
                        count++

                        for(let k = 0; k < p.length; k++){
                            if(x + p[k][0] < matrix.length && x + p[k][0] >= 0 && y + p[k][1] < matrix[0].length && y + p[k][1] >= 0){
                                let key = (x + p[k][0]) + ";" + (y + p[k][1])
                                if(matrix[x+p[k][0]][y+p[k][1]] == 1 && !visited[key]){
                                    queue.push([x + p[k][0], y + p[k][1]])
                                    visited[key] = 1
                                }
                            }
                        }
                    }

                    if(count > max) max = count
                }
            }
        }

        return max
    }
}