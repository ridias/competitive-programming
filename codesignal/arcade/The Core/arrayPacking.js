function solution(a) {
    let result = ""
    for(let i = a.length - 1; i >= 0; i--){ result += fill0(a[i].toString(2)) }
    return parseInt(parseInt(result, 2).toString(10))
}

function fill0(num){
    let result = ""
    for(let i = num.length; i < 8; i++){ result += "0" }
    return (result + num)
}
