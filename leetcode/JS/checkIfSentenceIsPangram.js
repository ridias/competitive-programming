// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    let set = new Set();
    sentence = sentence.toLowerCase().replace(/[^a-z]/g, '');
    for(let i = 0; i < sentence.length; i++){
        set.add(sentence[i])
    }
    
    return set.size == 26;
};