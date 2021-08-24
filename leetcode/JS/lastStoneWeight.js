// https://leetcode.com/problems/last-stone-weight/

/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
  
    stones.sort((a, b) => a - b)
    
    while(stones.length > 1){
        let stoneX = stones.pop()
        let stoneY = stones.pop()
        
        if(stoneX != stoneY){
            let valueToInsert = Math.abs(stoneX - stoneY);
            stones.splice(GetPositionForInsertion(stones, valueToInsert), 0, valueToInsert)
        }
    }
    
    return stones.length == 1 ? stones[0] : 0
};

function GetPositionForInsertion(stones, value){
    let left = 0
    let right = stones.length - 1
    let middle = 0
    
    while(left < right){
        middle = Math.floor((left + right) / 2)
        if(stones[middle] == value){
            return middle
        }else if(stones[middle] < value){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }
    
    if(stones[left] < value){
        return left + 1
    }else{
        return left
    }
}