function solution(a) {
    let repeated = []
    for(let i = 0; i < a.length; i++){
        if(repeated[a[i]] === undefined){
            repeated[a[i]] = i
        }else{
            return a[i]
        }
    }
    return -1
}
