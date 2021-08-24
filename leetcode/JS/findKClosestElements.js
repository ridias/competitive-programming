// https://leetcode.com/problems/find-k-closest-elements/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
    let pos = getPosByBinarySearch(arr, x)
    let result = []
    if(pos == 0){
        while(result.length < k) result.push(arr.shift())
    }else if(pos >= arr.length){
        while(result.length < k) result.push(arr.pop())
    }else{
        let right = pos
        let left = pos - 1
        
        while(result.length < k && (right < arr.length || left >= 0)){
            
            let valRight = right >= arr.length ? Infinity : Math.abs(x - arr[right])
            let valLeft = left < 0 ? Infinity : Math.abs(x - arr[left])
            
            if(valRight < valLeft){
                result.push(arr[right])
                right++
            }else{
                result.push(arr[left])
                left--
            }
        }
    }
    
    return result.sort((a, b) => a - b)
};

var getPosByBinarySearch = function(arr, target){
    let left = 0
    let right = arr.length - 1
    let middle = -1
    
    while(left <= right){
        middle = Math.floor((right + left) / 2)
        if(arr[middle] == target){
            return middle
        }else if(arr[middle] < target){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }
    
    return left
}

