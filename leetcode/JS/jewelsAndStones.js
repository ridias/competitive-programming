// https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
 var numJewelsInStones = function(J, S) {
    
    let map = {}
    let count = 0
    for(let i = 0; i < J.length; i++){
        if(map[J[i]] == undefined) map[J[i]] = 0
    }
    
    for(let i = 0; i < S.length; i++){
        if(map[S[i]] != undefined){
            count++
        }
    }
    
    return count
};