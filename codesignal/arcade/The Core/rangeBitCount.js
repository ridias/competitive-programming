function solution(a, b) {
    let result = 0
    for(let i = a; i <= b; i++){ result += numberOfOnes(i.toString(2))  
    }
}

function numberOfOnes(numString){
    let count = 0
    for(let i in numString){ if(numString.charAt(i) == 1){ count++ }}
    return count
}