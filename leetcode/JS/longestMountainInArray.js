// https://leetcode.com/problems/longest-mountain-in-array/

/**
 * @param {number[]} arr
 * @return {number}
 */
 var longestMountain = function(arr) {
    let left = 0
    let right = left + 1
    let isIncreasing = false
    let isDecreasing = false
    let max = 0
    
    while(right < arr.length){
        
        if(arr[right - 1] < arr[right] && !isIncreasing){
            if(right - left > max && isDecreasing) max = right - left
            left = right - 1
            right++
            isIncreasing = true
            isDecreasing = false
        }else if(arr[right - 1] > arr[right] && isIncreasing){
            isIncreasing = false
            isDecreasing = true
            right++
        }else if(arr[right - 1] > arr[right] && !isIncreasing && !isDecreasing){
            left = right
            right++
        }else if(arr[right - 1] == arr[right] && isIncreasing){
            left = right
            right++
            isIncreasing = false
            isDecreasing = false
        }else if(arr[right - 1] == arr[right] && isDecreasing){
            if(right - left > max && isDecreasing) max = right - left
            left = right
            right++
            isIncreasing = false
            isDecreasing = false
        }else{
            right++
        }
    }
    
    if(isDecreasing){
        if(right - left > max) max = right - left
    }
    
    return max
};