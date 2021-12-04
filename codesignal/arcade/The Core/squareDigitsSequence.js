function solution(a0) {
    let count = 0
    let founded = false
    let aux = a0
    let array = []
    while(a0 > 1 && !founded){
        let firstDigit = (Math.floor(a0 / 100)) * (Math.floor(a0 / 100))
        let secondDigit = (Math.floor(Math.floor(a0 / 10) % 10)) * (Math.floor(Math.floor(a0 / 10) % 10))
        let thirdDigit = (a0 % 10) * (a0 % 10)
        a0 = firstDigit + secondDigit + thirdDigit
        if(array.indexOf(a0) == -1){ array.push(a0) } else { count++; break }
        if(a0 == aux){ founded = true }
        count++
    }
    count++
    if(a0 <= 1){ count++ }
    return count
}
