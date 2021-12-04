function solution(a) {
    for(let i = 0; i < a.length - 1; i++){
        if(a[i] != -1){
            for(let j = i + 1; j < a.length; j++){
                if(a[i] > a[j] && a[j] != -1){
                    let aux = a[i]
                    a[i] = a[j]
                    a[j] = aux
                }
            }
        }
    }
    return a
}