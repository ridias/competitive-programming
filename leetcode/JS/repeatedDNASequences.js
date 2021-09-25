// https://leetcode.com/problems/repeated-dna-sequences/

/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function(s) {
    if(s.length < 10) return []
    
    let hashSet = new Set()
    let map = {}
    let arr = []
    
    for(let i = 0; i < 10; i++){
        arr.push(s[i])
    }
    
    map[arr.join("")] = 1
    
    for(let i = 10; i < s.length; i++){
        arr.shift()
        arr.push(s[i])
        let dna = arr.join("")
        if(map[dna] == undefined){
            map[dna] = 1
        }else{
            hashSet.add(dna)
        }
    }
    
    return [...hashSet]
};