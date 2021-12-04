function solution(solutionNumber, makeNew) {
    let result = solutionNumber
    let leftovers = solutionNumber
    while(solutionNumber > 0){
        solutionNumber = Math.floor(leftovers / makeNew) //make
        leftovers -= solutionNumber * makeNew    //leftover remains
        result += solutionNumber                 //accumulate result
        leftovers += solutionNumber              //burn
    }
    return result
}
