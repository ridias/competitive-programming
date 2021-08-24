// https://leetcode.com/problems/maximize-distance-to-closest-person/

/**
 * @param {number[]} seats
 * @return {number}
 */
 var maxDistToClosest = function(seats) {
    let arr = []
    let max = 0
    
    for(let i = 0; i < seats.length; i++){
        if(seats[i] == 1) arr.push(i)
    }
    
    let i = 0;
    let count = 0
    while(i < seats.length && seats[i] != 1){
        count++
        i++
    }
    
    arr.unshift(arr[0] - count * 2)
    
    
    i = seats.length - 1
    count = 0
    while(i >= 0 && seats[i] != 1){
        count++
        i--
    }
    
    arr.push(arr[arr.length - 1] + count * 2)
    
    for(let i = 1; i < arr.length; i++){
        let middle = Math.floor((arr[i] - arr[i - 1]) / 2)
        if(middle > max) max = middle
    }
    
    return max
};