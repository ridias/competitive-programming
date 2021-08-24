// https://leetcode.com/problems/sorting-the-sentence/

/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    let word = ""
    let num = ""
    let words = []
    for(let i = 0; i < s.length; i++){
        if(s[i] == " "){
            words.push([word, parseInt(num)])
            word = ""
            num = ""
        }else if(/[0-9]/.test(s[i])){
            num += s[i]
        }else{
            word += s[i]
        }
    }
    
    if(word.length > 0){
        words.push([word, parseInt(num)])
    }
    
    words.sort((a, b) => a[1] - b[1])
    
    return words.map(x => x[0]).join(" ")
};