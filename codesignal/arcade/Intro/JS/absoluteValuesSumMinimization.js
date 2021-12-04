function absoluteValuesSumMinimization(a) {
    if(a.length === 1){ return a[0] }
    let min = Math.pow(Math.max(...a), 3) 
    let pos = 0
    for(let i = 0; i < a.length; i++){
        let result = 0
        for(let j = 0; j < a.length; j++){
            result += Math.abs(a[j] - a[i])
        }
        if(result < min){ 
            pos = i
            min = result
            result = 0
        }
    }
    return a[pos]
}
