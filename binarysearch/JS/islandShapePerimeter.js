// https://binarysearch.com/problems/Island-Shape-Perimeter

class Solution {
    solve(matrix) {
        let bounds = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        let perimeter = 0
        let x = -1;
        let y = -1;
        for(let i = 0; i < matrix.length; i++){

            for(let j = 0; j < matrix[0].length; j++){
                
                if(matrix[i][j] == 1){
                    x = i
                    y = j
                    break;
                }
            }

            if(x != -1) break;
        }

        let queue = [[x, y]]
        let visited = {}
        visited[x + ";" + y] = 1

        while(queue.length > 0){
            let cell = queue.shift()
            let row = cell[0]
            let col = cell[1]
            let count = 0;
            for(let k = 0; k < bounds.length; k++){
                x = bounds[k][0] + row
                y = bounds[k][1] + col
                if(x < matrix.length && x >= 0 && y < matrix[0].length && y >= 0){
                    if(!visited[x + ";" + y] && matrix[x][y] == 1) queue.push([x, y])
                    if(matrix[x][y] == 0) count++
                    visited[x + ";" + y] = 1
                }else{
                    count++
                }
            }

            perimeter+= count
        }

        return perimeter;
     }


	//more faster!!
     solve2(matrix){
	let bounds = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        let perimeter = 0
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[0].length; j++){
                if(matrix[i][j] == 1){
                    let count = 0
                    for(let k = 0; k < bounds.length; k++){
                        let row = bounds[k][0] + i
                        let col = bounds[k][1] + j
                        if(row < matrix.length && row >= 0 && col < matrix[0].length && col >= 0){
                            if(matrix[row][col] == 0) count++
                        }else{
                            count++
                        }
                    }

                    perimeter += count
                }
            }
        }

        return perimeter	
     }
}
