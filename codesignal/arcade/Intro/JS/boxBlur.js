function boxBlur(image) {
    let limitRow = image.length - 2
    let limitCol = image[0].length - 2
    let result = initArray(limitRow, limitCol) 
    for(let i = 0; i < limitRow; i++){
        let sum = 0
        for(let j = 0; j < limitCol; j++){
            sum += image[i][j] + image[i][j+1] + image[i][j+2]
            sum += image[i+1][j] + image[i+1][j+1] + image[i+1][j+2]
            sum += image[i+2][j] + image[i+2][j+1] + image[i+2][j+2]
            result[i][j] = Math.floor(sum / 9)
            sum = 0
        }
    }
    return result
}

function initArray(row, col){
    let result = []
    for(let i = 0; i < row; i++){
        result.push([])
        for(let j = 0; j < col; j++){
            result[i].push(0)
        }
    }
    return result
}