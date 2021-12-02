function splitList(values: number[]):number[][] {
    let firstArray = []
    let secondArray = []
    let limit = Math.round(values.length / 2)
    for(let i = 0; i < values.length; i++){
        i < limit ? firstArray.push(values[i]) : secondArray.push(values[i])
    }
    return [firstArray, secondArray];
}