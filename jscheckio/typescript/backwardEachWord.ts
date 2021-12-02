function backwardStringByWord(text: string): string {
    let response: string = ""
    let wordToAdd = "";
    for(let i = 0; i < text.length; i++){
        
        if(text[i] == " "){
            response += wordToAdd + text[i]
            wordToAdd = ""
        }else{
            wordToAdd = text[i] + wordToAdd;
        }
    }
    
    if(wordToAdd.length > 0) response += wordToAdd
    
    return response;
}