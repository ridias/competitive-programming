function beginningZeros(text: string): number {
    let count: number = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i] == "0") count++
        else break
    }
    
    return count;
}
