function solution(a) {
    let groups = {}
    for(let i = 0; i < a.length; i++){
        let decimalGroup = a[i] / 1e4
        let group = Math.floor(a[i] / 1e4)
        let numberGroup = decimalGroup % group === 0 ? group - 1 : group
        if(groups[numberGroup] === undefined){
            groups[numberGroup] = 1
        }else{
            groups[numberGroup] += 1 
        }
    }
    
    let keys = Object.keys(groups)
    return keys.length + a.length

}
