function solution(n) {
    let numberOfDigits = n.toString().length
    for(let i = 1; i < numberOfDigits; i++){
        n = n / Math.pow(10, i)
        n = Math.round(n) * (Math.pow(10, i))
    }  
    return (n)
}
