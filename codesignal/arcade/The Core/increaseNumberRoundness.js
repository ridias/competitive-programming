function solution(n) {
    let aux = n.toString()
    for(let i = 0; i < aux.length - 1; i++){
        if(aux.charAt(i) === "0" && aux.charAt(i + 1) !== "0"){
            return true
        }
    }
    return false
}
