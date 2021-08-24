// https://leetcode.com/problems/check-array-formation-through-concatenation/

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
 var canFormArray = function(arr, pieces) {
    
    for(let i = 0; i < pieces.length; i++){
        
        let first = pieces[i][0]
        let j = 0;
        let found = false
        while(j < arr.length){
            if(arr[j] == first){
                found = true;
                break;
            }
            
            j++
        }
        
        if(!found) return false
        for(let k = 0; k < pieces[i].length; k++){
            if(arr.length <= j + k) return false
            if(pieces[i][k] != arr[j + k]) return false
        }
    }
    
    return true
};