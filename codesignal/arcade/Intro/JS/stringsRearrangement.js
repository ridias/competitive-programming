function stringsRearrangement(inputArray) {
    let permutations = []
    
    const permute = (arr, memo = []) =>{
        if(arr.length === 0){
            permutations.push(memo)
        }else{
            for(let i = 0; i < arr.length; i++){
                let current = arr.slice()
                let next = current.splice(i, 1)
                permute(current.slice(), memo.concat(next))
            }
        }
    }
    permute(inputArray)
    for(let i = 0; i < permutations.length; i++){
        let founded = false
        for(let j = 0; j < permutations[i].length - 1; j++){
            if(differenceByOne(permutations[i][j], permutations[i][j+1])){
                founded = true
            }else{
                founded = false
                break
            }
        }
        if(founded){ return true }
    }
    return false
    
}

function differenceByOne(ele1, ele2){
    let count = 0
    for(let i = 0; i < ele1.length; i++){
        if(ele1.charAt(i) !== ele2.charAt(i) && count === 0){
            count++
        }else if(ele1.charAt(i) !== ele2.charAt(i) && count > 0){
            return false
        }
    }
    return count === 1 ? true : false
}
