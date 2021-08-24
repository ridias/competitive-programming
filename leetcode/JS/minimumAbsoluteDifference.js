// https://leetcode.com/problems/minimum-absolute-difference/

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
    
    arr.sort((a, b) => a - b)
    
    let result = [[arr[0], arr[1]]]
    let min = arr[1] - arr[0] 
    for(let i = 2; i < arr.length; i++){
        if(arr[i] - arr[i-1] == min){
            result.push([arr[i-1], arr[i]])
        }else if(arr[i] - arr[i-1] < min){
            result = [[arr[i-1], arr[i]]]
            min = arr[i] - arr[i-1]
        }
    }
    
    return result
};