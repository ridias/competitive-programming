function solution(time) {
    let arrayTime = time.split(":")
    if(parseInt(arrayTime[0]) > 23 || parseInt(arrayTime[0]) < 0){ return false }
    if(parseInt(arrayTime[1]) > 59 || parseInt(arrayTime[1]) < 0){ return false }
    return true
}
