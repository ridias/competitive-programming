function solution(pattern, test) {
    
    if(pattern.length - test.length >= 3) return false
    
    if(pattern[0] == "^" && pattern[pattern.length - 1] == "$"){
        let subStr = pattern.subtring(1, pattern.length - 1)
        return subStr == test
    }else if(pattern[pattern.length - 1] == "$"){
        for(let i = 1; i < pattern.length && pattern.length - 1 - i >= 0; i++){
            if(pattern[pattern.length - i - 1] != test[test.length - i]) return false
        }
    }else if(pattern[0] == "^"){
        for(let i = 1; i < pattern.length; i++){
            if(pattern[i] != test[i-1]) return false
        }
    }else{
        let result = strstr(test, pattern)
        if(result == -1) return false
    }
    
    return true
}

function strstr(s, x){
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
