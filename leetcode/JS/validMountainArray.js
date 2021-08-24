// https://leetcode.com/problems/valid-mountain-array/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
    if(arr.length == 1) return false
    let isIncreasing = false
    let isDescending = false
    
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i - 1] < arr[i] && !isDescending){
            isIncreasing = true
        }else if(arr[i - 1] > arr[i] && isIncreasing){
            isDescending = true
        }else{
            return false
        }
    }
    
    return isDescending && isIncreasing
};