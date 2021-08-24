// https://leetcode.com/problems/replace-words/

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
 var replaceWords = function(dictionary, sentence) {
    dictionary.sort((a, b) => a.length - b.length)
    
    let sentenceSplitted = sentence.split(" ");
    for(let i = 0; i < sentenceSplitted.length; i++){
        for(let j = 0; j < dictionary.length; j++){
            let substr = sentenceSplitted[i].substring(0, dictionary[j].length);
            if(substr == dictionary[j]){
                sentenceSplitted[i] = dictionary[j]
                break;
            }
        }
    }
    
    return sentenceSplitted.join(" ")
};