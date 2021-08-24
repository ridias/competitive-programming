// https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
 var findLongestWord = function(s, d) {
    d.sort((a, b) => a.localeCompare(b))
    let max = "";
    for(let i = 0; i < d.length; i++){
        
        if(s.length < d[i].length) continue
        
        let j = 0;
        let k = 0;

        while(j < s.length){
            let ch = d[i][j]
            while(ch != s[k]  && k < s.length){
                k++
            }
            
            if(k >= s.length && j < d[i].length){
                break
            }
            
            k++
            j++
            if(j >= d[i].length){
                if(max.length < d[i].length){
                    max = d[i]
                }
            }

        }
    }
    
    return max
};