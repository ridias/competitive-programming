function goesAfter(word: string, first: string, second: string): boolean {
    if(first == second) return false;
    for(let i = 0; i < word.length - 1; i++){
        if(word[i] == first){
            if(word[i+1] == second) 
                return true
            else 
                break
        }else if(word[i] == second){
            break
        }
    }
    return false;
}