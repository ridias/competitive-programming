function secondIndex(text: string, symbol: string): number | undefined {
    let ocurrences: number = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i] == symbol) ocurrences++;
        if(ocurrences == 2) return i;
    }

    return undefined;
}