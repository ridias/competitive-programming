// https://leetcode.com/problems/hamming-distance/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    x = x.toString(2)
    y = y.toString(2)
    let diff = 0
    if(x.length > y.length){
        y = leadingZeros(y, x.length)
    }else if(x.length < y.length){
        x = leadingZeros(x, y.length)
    }
    for(let i = 0; i < x.length; i++){
        if(x.charAt(i) !== y.charAt(i)){
            diff++
        }
    }
    return diff
};

function leadingZeros(value, length){
    while(value.length < length){ value = "0" + value }
    return value
}