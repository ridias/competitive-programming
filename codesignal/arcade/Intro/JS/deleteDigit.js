function deleteDigit(n) {
    let aux = n.toString()
    n = n.toString()
    let max = 0
    for(let i = 0; i < aux.length; i++){
        n = n.split("")
        n.splice(i, 1)
        if(parseInt(n.join("")) > max){ max = parseInt(n.join("")) }
        n = aux;
    }
    return max
}
