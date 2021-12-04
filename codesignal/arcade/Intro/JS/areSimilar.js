function areSimilar(a, b) {
    let equal = a.every((value, index) => value === b[index])
    if(equal === true){ return true }
    
    let pairsNotValid = []
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            pairsNotValid.push([a[i], b[i]])
        }
    }
    if(pairsNotValid.length % 2 === 1 || pairsNotValid.length > 2){ return false }
    if(pairsNotValid[0][0] === pairsNotValid[1][1] && pairsNotValid[0][1] === pairsNotValid[1][0]){ 
        return true
    } else { 
        return false 
    }
}
