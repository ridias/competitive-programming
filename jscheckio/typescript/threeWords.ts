function threeWords(text: string): boolean {
    let textSplitted = text.split(" ")
    let count = 0;
    for(let i = 0; i < textSplitted.length; i++){
        if(/^[0-9]{1,}$/.test(textSplitted[i])){
            count = 0;   
        }else{
            count++
        }
        
        if(count >= 3) return true;
    }
    
    return false;
}