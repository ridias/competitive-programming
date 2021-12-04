function solution(arr) {
    if(arr[0] != arr[arr.length - 1]){ return false }
    if(arr[arr.length / 2] + arr[arr.length / 2 - 1] == arr[0]){ return true}
    if(arr[Math.floor(arr.length / 2)] == arr[0]){ return true}   
    return false
}
