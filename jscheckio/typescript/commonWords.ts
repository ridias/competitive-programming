function commonWords(line1: string, line2: string): string {
    let result = []
    let setFirstLine = new Set(line1.split(",")) 
    let line2Splitted = line2.split(",")
    for(let i = 0; i < line2Splitted.length; i++){
        if(setFirstLine.has(line2Splitted[i])){
            result.push(line2Splitted[i])   
        }
    }
    
    return result.sort((a, b) => a.localeCompare(b)).join(",");
}