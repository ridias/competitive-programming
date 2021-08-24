//https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    
    let left = 0
    let right = 0
    let max = 0
    let set = new Set()
    
    while(right < s.length){
        
        while(right < s.length && !set.has(s[right])){
            set.add(s[right])
            right++
        }
        
        if(right - left > max){
            max = right - left
        }
        
        while(left < s.length && set.has(s[right])){
            set.delete(s[left])
            left++
        }
    }
    
    return max;  
};