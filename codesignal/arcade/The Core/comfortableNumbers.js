function solution(l, r) {
    let pairs = {}
    for(let i = l; i <= r; i++){
        let suma = sum(i)
        pairs[i] = [i - suma, i + suma]
    }
    
    let count = 0
    let keys = Object.keys(pairs)
    for(let i = 0; i < keys.length - 1; i++){
        for(let j = i + 1; j < keys.length; j++){
            if(parseInt(keys[i]) >= pairs[keys[j]][0] && parseInt(keys[i]) <= pairs[keys[j]][1] && parseInt(keys[j]) >= pairs[keys[i]][0] && parseInt(keys[j]) <= pairs[keys[i]][1]){
                count++
            }
        }
    }
    
    return count
}

function sum(n){
    let result = 0
    while(n > 0){
        result += n % 10
        n = Math.floor(n / 10)
    }
    return result
}