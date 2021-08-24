// https://leetcode.com/problems/consecutive-characters/

/**
 * @param {string} s
 * @return {number}
 */
 var maxPower = function(s) {
    let count = 0
    let previous = ""
    let max = 0
    if(s.length > 0){
        previous = s[0]
        count = 1
        max = 1
    }
    
    for(let i = 1; i < s.length; i++){
        if(s[i] == previous){
            count++
        }else{
            if(max < count){
                max = count
            }
            count = 1
            previous = s[i]
        }
    }
    
    if(count > max){
        max = count
    }
    
    return max
};