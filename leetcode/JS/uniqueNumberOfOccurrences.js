// https://leetcode.com/problems/unique-number-of-occurrences/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    arr.sort((a, b) => a - b)
    
    let map = {}
    let count = 1
    let previous = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(previous != arr[i]){
            if(map[count] == undefined){
                map[count] = 1
                previous = arr[i]
                count = 1
            }else{
                return false
            }
        }else{
            count++
        }
    }
    
    if(map[count] != undefined){
        return false
    }
    
    return true
};