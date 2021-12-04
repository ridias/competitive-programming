function solution(items) {
    let resultArray = [-1]
    let max = items[0]
    for(let i = 1; i < items.length; i++){
        resultArray.push(findMinValueInItems(items, i))
    }
    return resultArray
}

function findMinValueInItems(items, start){
    let value = items[start]
    for(let i = start - 1; i >= 0; i--){
        if(value > items[i]){
            return items[i]
        }
    }
    return -1
}
