function solution(shuffled) {
    let min = Math.min(...shuffled)
    let arrayResult = []
    if(min < 0){ 
        for(let i = 1; i < shuffled.length; i++){
            let toCompare = shuffled[i]
            let result = 0
            for(let j = 0; j < shuffled.length; j++){
                if(j != i){ 
                    result += shuffled[j]
                    arrayResult.push(shuffled[j])
                }
            }
            if(toCompare === result){ arrayResult.sort((a, b) => a - b); break;} else { arrayResult = [] }
        }
        if(arrayResult.length === 0){
            for(let i = 1; i < shuffled.length; i++){
                arrayResult.push(shuffled[i])
            }
            arrayResult.sort((a,b) => a - b);
        }
    }else{
        let max = Math.max(...shuffled)
        for(let i = 0; i < shuffled.length; i++){
            if(shuffled[i] != max){
                arrayResult.push(shuffled[i])
            }
        }
        arrayResult.sort((a,b) => a - b);
    }
    return arrayResult
}
