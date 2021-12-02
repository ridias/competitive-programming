function translate(text: string): string {
    let response = ""
    let count = 0;
    let i = 0;
    while(i < text.length){
        if(/[aeiouy]/.test(text[i])){
            let previous = text[i];
            let count = 1;
            while(previous == text[i] && i < text.length){
                i++
                count++;
            }
            
            response += previous.repeat(Math.floor(count / 3))
        }else{
            response += text[i]
            i++
        }
    }
    
    return response;
}