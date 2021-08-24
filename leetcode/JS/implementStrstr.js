//https://leetcode.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    let last = needle.length -1
    let maxOffset = haystack.length - needle.length
    let offset = 0
    let letters = {}
    
    if(last < 0){ return 0 }
    for(let i = 0; i < needle.length - 1; i++){
        letters[needle.charAt(i)] = last - i
    }
    
    while(offset <= maxOffset){
        for(let i = last; needle.charAt(i) == haystack.charAt(i+offset); i--){
            if(i == 0){ return offset }
        }
        
        offset += letters[haystack.charAt(offset + last)] || last || 1
    }
    return -1
};