function sumByTypes(values: Array<number|string>): [string, number] {
    let totalSum: any = 0;
    let concatStr: string = "";
    
    for(let i = 0; i < values.length; i++){
        typeof values[i] == "string" ? concatStr += values[i] : totalSum += values[i]
    }
    
    return [concatStr, totalSum];
}