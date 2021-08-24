// https://leetcode.com/problems/rearrange-words-in-a-sentence/

/**
 * @param {string} text
 * @return {string}
 */
 var arrangeWords = function(text) {
    
    let textSplitted = text.split(" ")
    let map = {}
    for(let i = 0; i < textSplitted.length; i++){
        map[textSplitted[i].length] == undefined ?
            map[textSplitted[i].length] = [textSplitted[i]] : 
            map[textSplitted[i].length].push(textSplitted[i])
    }
    
    let result = ""
    let keys = Object.keys(map).map(x => parseInt(x)).sort((a, b) => a - b)
    
    for(let i = 0; i < keys.length; i++){
        for(let j = 0; j < map[keys[i]].length; j++){
            let word = map[keys[i]][j]
            if(result.length == 0){
                result += word[0].toUpperCase() + word.substring(1, word.length).toLowerCase()
            }else{
                result += " " + map[keys[i]][j].toLowerCase()
            }
        }
    }
    
    return result
    
};