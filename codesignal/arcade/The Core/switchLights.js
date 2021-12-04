function solution(a) {
    if(a[0] === 1){ a[0] = 0 }
    for(let i = 1; i < a.length; i++){
        if(a[i] === 1){
            for(let j = i; j >= 0; j--){
                a[j] === 1 ? a[j] = 0 : a[j] = 1
            }
        }
    }
    return a
}
