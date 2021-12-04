function solution(a, b, v) {
    a.sort((a, b) =>{ return a - b})
    b.sort((a, b) =>{ return a -b})
    for(let i = 0; i < a.length; i++){
        let value = v - a[i]
        if(binarySearch(b, value)){ return true }
    }
    return false
}

function binarySearch(b, value){
    let right = b.length - 1
    let left = 0
    let middle = 0
    while(left <= right){
        middle = Math.floor((right + left) / 2)
        if(b[middle] == value){
            return true
        }else if(value > b[middle]){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }
    return false
}