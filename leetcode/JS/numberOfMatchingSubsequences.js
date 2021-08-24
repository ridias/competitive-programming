// https://leetcode.com/problems/number-of-matching-subsequences/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
 var numMatchingSubseq = function(s, words) {
    let count = 0
    let map = {}
    for(let i = 0; i < words.length; i++){
        
        let j = 0
        let k = 0
        if(map[words[i]] == undefined){
        
            while(j < words[i].length){

                while(s[k] != words[i][j] && k < s.length){
                    k++   
                }

                if(words[i][j] == s[k]){
                    k++
                    j++
                }else{
                    break;
                }
            }

            if(j == words[i].length){
                map[words[i]] = 1
                count++
            }else{
                map[words[i]] = 0
            }
        }else{
            count += map[words[i]]
        }
    }
    
    return count
};