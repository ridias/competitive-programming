// https://leetcode.com/problems/uncommon-words-from-two-sentences/

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
 var uncommonFromSentences = function(A, B) {
    
    A = A.trim().replace(/ {1,}/g, " ")
    B = B.trim().replace(/ {1,}/g, " ")
    
    let mapA = {}
    let mapB = {}
    A = A.split(" ")
    B = B.split(" ")
    for(let i = 0; i < A.length; i++){
        if(A[i].length == 0) continue
        mapA[A[i]] == undefined ? mapA[A[i]] = 1 : mapA[A[i]] += 1
    }
    
    for(let i = 0; i < B.length; i++){
        if(B[i].length == 0) continue
        mapB[B[i]] == undefined ? mapB[B[i]] = 1 : mapB[B[i]] += 1
    }
    
    let keysA = Object.keys(mapA)
    let keysB = Object.keys(mapB)
    
    let result = []
    
    for(let i = 0; i < keysA.length; i++){
        if(mapB[keysA[i]] == undefined && mapA[keysA[i]] == 1){
            result.push(keysA[i])
        }
    }
    
    for(let i = 0; i < keysB.length; i++){
        if(mapA[keysB[i]] == undefined && mapB[keysB[i]] == 1){
            result.push(keysB[i])
        }
    }
    
    return result
};