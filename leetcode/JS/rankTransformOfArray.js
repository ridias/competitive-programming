// https://leetcode.com/problems/rank-transform-of-an-array/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var arrayRankTransform = function(arr) {
    let sortedArray = [...arr].sort((a, b) => a - b)
    if(sortedArray.length > 0) sortedArray[0] = [sortedArray[0], 1]
    for(let i = 1; i < sortedArray.length; i++){
        if(sortedArray[i] == sortedArray[i-1][0]){
            sortedArray[i] = [sortedArray[i], sortedArray[i-1][1]]
        }else{
            sortedArray[i] = [sortedArray[i], sortedArray[i-1][1] + 1]
        }
    }
    
    for(let i = 0; i < arr.length; i++){
        let left = 0
        let right = sortedArray.length - 1
        let middle = -1;
        while(left <= right){
            middle = Math.floor((right + left) / 2)
            if(sortedArray[middle][0] == arr[i]){
                arr[i] = sortedArray[middle][1]
                break
            }else if(sortedArray[middle][0] > arr[i]){
                right = middle - 1
            }else{
                left = middle + 1
            }
        }
        
        if(sortedArray[middle][0] == arr[i]){
            arr[i] = sortedArray[middle][1]
        }
    }
    
    return arr
};