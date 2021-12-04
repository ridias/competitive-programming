function solution(legs) {
    let result = []
    for(let i = 0; i <= Math.floor(legs / 2); i++){
        let legsHuman = i * 2
        let legsCat = legs - legsHuman
        if(legsCat % 4 === 0){
            result.push(i)
        }
    }
    return result
}
