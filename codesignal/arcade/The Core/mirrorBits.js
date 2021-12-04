function solution(a) {
    return parseInt(parseInt(a.toString(2).split("").reverse().join(""), 2).toString(10))
}
