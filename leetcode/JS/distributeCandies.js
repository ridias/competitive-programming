// https://leetcode.com/problems/distribute-candies/

/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {
    let numberOfCandies = candyType.length / 2
    let result = 0
    let map = {}
    for(let i = 0; i < candyType.length; i++){
        if(map[candyType[i]] == undefined){
            map[candyType[i]] = 1
            numberOfCandies--;
            if(numberOfCandies > -1) result++
        }   
    }
    
    return result;
};