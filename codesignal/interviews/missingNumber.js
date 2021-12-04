function solution(arr) {
    let max = Math.max(...arr)
    if(arr.length === 1 && arr[0] == 1){ return 0} else if(arr.length === 1 && arr[0] == 0){ return 1}
    for(let i = 0; i <= max; i++){
        if(arr.indexOf(i) === -1){
            return i
        }
    }
    return max +1
}
