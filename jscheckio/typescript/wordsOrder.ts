function wordsOrder(text: string, words: string[]): boolean {
    let textSplitted = text.split(" ")
    let i = 0;
    let j = 0;
    
    let map = {}
    
    while(i < textSplitted.length){
        if(textSplitted[i] == words[j] && map[words[j]] == undefined){
            map[words[j]] = 1
            i++
            j++
        }else{
            i++   
        }
    }
    return j == words.length;
}