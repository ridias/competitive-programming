class Solution {
    solve(matrix) {
        let count = 0

        for(let i = 0; i < matrix.length; i++){
            if(matrix[i][0] == 1) 
                matrix = this.bfs(matrix, i, 0)
            if(matrix[i][matrix[i].length - 1] == 1) 
                matrix = this.bfs(matrix, i, matrix[i].length - 1)
        }

        for(let i = 0; i < matrix[0].length; i++){
            if(matrix[0][i] == 1)
                matrix = this.bfs(matrix, 0, i)
            if(matrix[matrix.length - 1][i] == 1)
                matrix = this.bfs(matrix, matrix.length - 1, i)
        }

        for(let i = 1; i < matrix.length - 1; i++){
            for(let j = 1; j < matrix[i].length - 1; j++){
                if(matrix[i][j] == 1){
                    count++
                }
            }
        }

        return count
    }

    bfs(matrix, i, j){
        let queue = [[i, j]]
        let bounds = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        let visited = {}

        visited[i + ";" + j] = 1

        while(queue.length > 0){
            let cell = queue.shift()
            let x = cell[0]
            let y = cell[1]

            for(let k = 0; k < bounds.length; k++){
                let nextX = bounds[k][0] + x
                let nextY = bounds[k][1] + y
                if(nextX < matrix.length && nextX >= 0 && nextY < matrix[x].length && nextY >= 0 && !visited[nextX + ";" + nextY]){
                    if(matrix[nextX][nextY] == 1){
                        visited[nextX + ";" + nextY] = 1
                        queue.push([nextX, nextY])
                        matrix[nextX][nextY] = 0
                    }
                }
            }
        }

        return matrix
    }
}