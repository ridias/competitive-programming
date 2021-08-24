// https://leetcode.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    let len = 0;
    let map = {}
    for(let i = 0; i < s.length; i++){
        if(map[s[i]]){
            map[s[i]] += 1
            if(map[s[i]] % 2 == 0) len+= 2
        }else{
            map[s[i]] = 1
        }
    }
    
    let keys = Object.keys(map);
    
    for(let i = 0; i < keys.length; i++){
        if(map[keys[i]] % 2 == 1){
            len++
            break
        }
    }
    
    return len
};