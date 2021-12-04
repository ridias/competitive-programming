function solution(arr) {
    if(arr.length % 2 == 0){
        arr.splice(arr.length / 2 + 1, 0, arr[arr.length / 2] + arr[arr.length / 2 - 1])
        arr.splice(arr.length / 2 - 1, 2)
    }
    
    return arr
}
