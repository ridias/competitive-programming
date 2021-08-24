// https://leetcode.com/problems/duplicate-zeros/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    let response = []
    let currentIndexArr = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[currentIndexArr] == 0){
            response.push(0)
            if(response.length < arr.length){
                response.push(0)
            }
            i++
        }else{
            response.push(arr[currentIndexArr])
        }
        
        currentIndexArr++
    }
    
    for(let i = 0; i < response.length; i++){
        arr[i] = response[i]
    }
};