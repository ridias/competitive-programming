// https://binarysearch.com/problems/Surrounded-Islands

class Solution {
    solve(matrix) {
        
        for(let i = 0; i < matrix.length; i++){
            if(matrix[i][0] == 1) matrix = this.removeIsland(matrix, i, 0)
            if(matrix[i][matrix[i].length - 1] == 1) matrix = this.removeIsland(matrix, i, matrix[i].length - 1)
        }

        for(let i = 0; i < matrix[0].length; i++){
            if(matrix[0][i] == 1) matrix = this.removeIsland(matrix, 0, i)
            if(matrix[matrix.length - 1][i] == 1) matrix = this.removeIsland(matrix, matrix.length - 1, i)
        }

        let count = 0
        for(let i = 1; i < matrix.length; i++){
            for(let j = 1; j < matrix[i].length; j++){
                if(matrix[i][j] == 1){
                    count++
                    matrix = this.removeIsland(matrix, i, j)
                }
            }
        }

        return count;
    }

    removeIsland(matrix, i, j){

        let queue = [[i, j]]
        let bounds = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        let visited = {}
        visited[i + ";" + j] = 1

        while(queue.length > 0){
            let cell = queue.shift();
            let x = cell[0]
            let y = cell[1]
            matrix[x][y] = 0
            for(let i = 0; i < bounds.length; i++){
                let nextX = bounds[i][0] + x
                let nextY = bounds[i][1] + y
                if(nextX < matrix.length && nextX >= 0 && nextY < matrix[0].length && nextY >= 0){
                    if(visited[nextX + ";" + nextY] == undefined && matrix[nextX][nextY] == 1){
                        queue.push([nextX, nextY])
                        visited[nextX + ";" + nextY] = 1
                    }
                }
            }
        }

        return matrix
    }
}