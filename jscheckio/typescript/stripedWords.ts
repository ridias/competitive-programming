function stripedWords(line: string): number {
    
    let lineSplitted = line.split(/\W/).filter(x => x.length > 0)
    let count = 0;
    for(let i = 0; i < lineSplitted.length; i++){
        if(/[0-9]/.test(lineSplitted[i][0])) continue
        let isVowel = /[AEIOUYaeiouy]/.test(lineSplitted[i][0]) ? true : false
        let found = true;
        for(let j = 1; j < lineSplitted[i].length; j++){
            if(/[0-9]/.test(lineSplitted[i][j])){
                found = false;
                break;
            }else if(isVowel && /[AEIOUYaeiouy]/.test(lineSplitted[i][j])){
                found = false
                break;   
            }else if(!isVowel && !/[AEIOUYaeiouy]/.test(lineSplitted[i][j])){
                found = false
                break;   
            }else{
                isVowel = !isVowel   
            }
        }
        
        if(found && lineSplitted[i].length > 1) count++
    }
    
    return count;
}