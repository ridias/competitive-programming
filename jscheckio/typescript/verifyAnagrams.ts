function verifyAnagrams(line1: string, line2: string): boolean {
    let map = {}
    
    for(let i = 0; i < line1.length; i++){
        let char = line1[i].toLowerCase()
        if(/[a-z]/.test(char)){
            map[char] == undefined ? map[char] = 1: map[char] += 1
        }
    }
    
    for(let i = 0; i < line2.length; i++){
        let char = line2[i].toLowerCase()
        if(/[a-z]/.test(char)){
            if(map[char] == undefined){
                return false;   
            }else if(map[char] - 1 < 0){
                return false   
            }else{
                map[char] -= 1   
            }
        }
    }
    
    let keys = Object.keys(map)
    for(let i = 0; i < keys.length; i++){
        if(map[keys[i]] > 0) return false   
    }
    
    return true;
}