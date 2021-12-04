function solution(matrix) {
    let perimeter = 0
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === true){
                if(i - 1 >= 0){
                    if(matrix[i-1][j] == false){ perimeter++}
                }else{
                    perimeter++
                }
                
                if(j - 1 >= 0){
                    if(matrix[i][j-1] == false){ perimeter++}
                }else{
                    perimeter++
                }
                
                if(j + 1 < matrix[i].length){
                    if(matrix[i][j+1] == false){ perimeter++}
                }else{
                    perimeter++
                }
                
                if(i + 1 < matrix.length){
                    if(matrix[i+1][j] == false){ perimeter++}
                }else{
                    perimeter++
                }
            }
        }
    }
    return perimeter
}
