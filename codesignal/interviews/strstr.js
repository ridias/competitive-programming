function findFirstSubstringOccurrence(s, x) {
    let last = x.length - 1
    let maxOffset = s.length - x.length
    let offset = 0
    let letters = {}
    
    if(last < 0){ return 0}
    for(let i = 0; i < x.length - 1; i++){
        letters[x.charAt(i)] = last - i
    }

    while(offset <= maxOffset){
        for(let i = last; x.charAt(i) == s.charAt(i + offset); i--){
            if(i === 0){ return offset }
        }
        
        offset += letters[s.charAt(offset+last)] || last || 1
    }
    return -1
}
