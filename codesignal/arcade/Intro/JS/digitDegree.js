function digitDegree(n) {
    if(n < 10){ return 0 }
    let count = 0
    while(n > 9){ n = sumDigitsNumber(n); count++ }
    return count
}

function sumDigitsNumber(n){
    let result = 0
    while(n > 0){ result += n % 10; n = Math.floor(n / 10) }
    return result
}
