//https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs == null) return "";
    if(strs && strs.length == 0) return "";
    if(strs.length == 1) return strs[0];
    
    let minLen =+ Infinity;
    
    if(strs && strs.length > 0){
        var strs = strs.sort(function(a,b){
            minLen = Math.min(minLen, a.length, b.length);
            return a.localeCompare(b);
        });  
        
        var firstSt=strs[0].split("");
        var lastSt=strs[strs.length-1].split("");
        let i=0;
        while(i< minLen && firstSt[i] == lastSt[i]) i++;
    
        return i>0? strs[0].slice(0,i): "";
    }
};