function countDigits(text: string): number {
    let count = 0;
    for(let i = 0; i < text.length; i++){
        if(/[0-9]/.test(text[i])) count++   
    }
    
    return count;
}