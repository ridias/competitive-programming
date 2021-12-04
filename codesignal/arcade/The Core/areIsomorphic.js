function solution(array1, array2) {
    let equals = null
    if(array1.length === array2.length){ equals = true } else { return false }
    for(let i in array1){
        if(array1[i].length !== array2[i].length){ return false }
    }
    return equals
}
