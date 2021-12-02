function isometricStrings(line1: string, line2: string): boolean {
    let map = {}
    
    for(let i = 0; i < line1.length; i++){
        let letter = line1[i]
        if(!map[letter]){
            map[letter] = line2[i]
        }else if(map[letter] != line2[i]){
            return false;   
        }
    }
    
    return true;
}