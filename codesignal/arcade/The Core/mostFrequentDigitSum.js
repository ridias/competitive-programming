function solution(n) {
    let hashNumbers = {}
    while(n > 0){
        let substract = sumDigits(n)
        hashNumbers[substract] == undefined ? hashNumbers[substract] = 1 : hashNumbers[substract] += 1
        n = n - substract
    }
    
    let keys = Object.keys(hashNumbers)
    let max = hashNumbers[keys[0]]
    let number = keys[0]
    for(let i = 1; i <keys.length; i++){
        if(max <= hashNumbers[keys[i]]){
            max = hashNumbers[keys[i]]
            number = keys[i]
        }
    }
    return parseInt(number)
}

function sumDigits(n){
    let result = 0
    while(n > 0){
        result += n % 10
        n = Math.floor(n / 10)
    }
    return result
}
