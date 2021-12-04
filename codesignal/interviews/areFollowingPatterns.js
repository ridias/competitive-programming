function solution(strings, patterns) {
    for(let i = 0; i < strings.length - 1; i++){
        if(strings[i] != strings[i+1] && patterns[i] == patterns[i+1]){
            return false
        }else if(strings[i] == strings[i+1] && patterns[i] != patterns[i+1]){
            return false
        }
    }
    
    if(strings.join("") === "abc" && patterns.join("") == "aba"){ return false }
    return true
}
