// https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if(numRows == 1) return s
    let arr = new Array(numRows).fill("")
    let currentIndex = 0
    let down = false
    
    for(let i = 0; i < s.length; i++){
        
        if(!down && currentIndex == 0){
            down = true
        }else if(down && currentIndex + 1 == numRows){
            down = false
        }
        
        arr[currentIndex] += s[i];
        down ? currentIndex += 1 : currentIndex -= 1;
    }

    return arr.join("")
};