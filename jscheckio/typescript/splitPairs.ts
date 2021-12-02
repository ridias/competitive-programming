function splitPairs(text: string): string[] {
    let response = []
    
    for(let i = 0; i < text.length; i+= 2){
        if(i + 1 >= text.length){
            response.push(text[i] + "_")   
        }else{
            response.push(text[i] + text[i+1])
        }
    }
    
    return response;
}