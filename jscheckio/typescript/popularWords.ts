function popularWords(text: string, words: string[]) {
    let map = {}
    let textSplitted = text.split(/[\n ]+/)
    for(let i = 0; i < words.length; i++){
        map[words[i]] == undefined ? map[words[i]] = 0 : 0
    }

    for(let i = 0; i < textSplitted.length; i++){
        let keyToCheck = textSplitted[i].toLowerCase();
        if(map[keyToCheck] != undefined){
            map[keyToCheck] += 1    
        }
    }
    
    return map;
}