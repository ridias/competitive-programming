// https://leetcode.com/problems/first-bad-version/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1
        let right = n;
        
        while(left < right){
            let val = Math.floor((right + left) / 2)
            let isBad = isBadVersion(val)
            if(!isBad){
                left = val + 1
                if(isBadVersion(left)) return left
            }else if(isBad){
                right = val - 1
                if(!isBadVersion(right)) return val
            }
        }
        
        return left
    };
};