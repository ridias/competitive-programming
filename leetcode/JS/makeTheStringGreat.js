// https://leetcode.com/problems/make-the-string-great/

/**
 * @param {string} s
 * @return {string}
 */
 var makeGood = function(s) {
    let i = 0;
    let j = 1;
    
    while(i < s.length && j < s.length){
        if(s[i].charCodeAt(0) + 32 == s[j].charCodeAt(0)){
            s = s.substring(0,i) + s.substring(j + 1, s.length)
            i = 0;
            j = 1;
        }else if(s[i].charCodeAt(0) - 32 == s[j].charCodeAt(0)){
            s = s.substring(0,i) + s.substring(j + 1, s.length)
            i = 0;
            j = 1;
        }else{
            i++;
            j++;
        }
    
    }
    
    return s
};