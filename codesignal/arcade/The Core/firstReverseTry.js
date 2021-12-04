function solution(arr) {
    if(arr.length < 1) return arr
    let aux = arr[0]
    arr[0] = arr[arr.length - 1]
    arr[arr.length - 1] = aux
    return arr
}
