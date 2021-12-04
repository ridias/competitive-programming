function differentSymbolsNaive(s) {
    let digitsInIt = []
    for(let i in s){
        if(!digitsInIt.includes(s.charAt(i))){ digitsInIt.push(s.charAt(i)) }
    }
    return digitsInIt.length
}
