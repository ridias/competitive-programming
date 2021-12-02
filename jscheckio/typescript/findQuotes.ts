function findQuotes(text: string): string[] {
    let word: string = "";
    let result: string[] = []
    let i: number = 0;
    
    while(i < text.length){
        if(text[i] == '"'){
            i++;
            while(text[i] != '"' && i < text.length){
                word += text[i]
                i++   
            }
            
            result.push(word)
            word = ""
        }
        i++
    }
    
    return result;
}