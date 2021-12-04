function spiralNumbers(n) {
    let result = generateArray(n)
    let currentValue = 1
    let start = 0
    let values = [result, currentValue, start, start]
    let accumulate = 0
    while(values[1] <= n * n){
        if(values[1] <= n * n) values = leftToRight(values[0], values[1], start + accumulate, start + accumulate)
        if(values[1] <= n * n) values = topToBottom(values[0], values[1], values[2]+1, values[3])
        if(values[1] <= n * n) values = rightToLeft(values[0], values[1], values[2], values[3]-1) 
        if(values[1] <= n * n) values = bottomToTop(values[0], values[1], values[2]-1, values[3])
        accumulate++
    }
    
    return values[0]
}

function generateArray(n){
    let result =[]
    for(let i = 0; i < n; i++){
        result.push([])
        for(let j = 0; j < n; j++) result[i][j] = 0
    }
    return result
}

function leftToRight(arr, currentValue, row, col){
    for(let i = col; i < arr[row].length; i++){
        arr[row][i] = currentValue
        currentValue++
        col = i
        if(i+1 < arr[row].length)
            if(arr[row][i+1] !== 0) 
                break
    }
    return [arr, currentValue, row, col]
}

function topToBottom(arr, currentValue, row, col){
    for(let i = row; i < arr.length; i++){
        arr[i][col] = currentValue
        currentValue++
        row = i
        if(i+1 < arr.length)
            if(arr[i+1][col] !== 0) 
                break
    }
    return [arr, currentValue, row, col]
}

function rightToLeft(arr, currentValue, row, col){
    for(let i = col; i >= 0; i--){
        arr[row][i] = currentValue
        currentValue++
        col = i
        if(i-1 >= 0)
            if(arr[row][i-1] !== 0) 
                break
    }
    return [arr, currentValue, row, col]
}

function bottomToTop(arr, currentValue, row, col){
    for(let i = row; i >= 0; i--){
        arr[i][col] = currentValue
        currentValue++
        row = i
        if(i-1 >= 0)
            if(arr[i-1][col] !== 0) 
                break
    }
    return [arr, currentValue, row, col]
}
