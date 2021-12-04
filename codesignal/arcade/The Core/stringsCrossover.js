function solution(inputArray, result) {
    let ans = 0
    for(let i = 0; i < inputArray.length - 1; i++){
        for(let j = i + 1; j < inputArray.length; j++){
            let foundIt = false
            let count = 0
            for(let k = 0; k < result.length; k++){
                if((result.charAt(k) === inputArray[i].charAt(k)) || (result.charAt(k) === inputArray[j].charAt(k))){
                    count++
                }else{
                    break
                }
            }
            if(count === result.length){
                ans++
            }
        }
    }
    return ans
}
