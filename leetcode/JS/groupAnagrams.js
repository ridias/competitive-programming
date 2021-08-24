//https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let map = []
    
    for(let i = 0; i < strs.length; i++){
        let word = strs[i]
        word = word.split("").sort((a, b) => a.localeCompare(b)).join("")
        if(map[word] == undefined){
            map[word] = [strs[i]]
        }else{
            map[word].push(strs[i])
        }
    }
    
    let result = []
    let keys = Object.keys(map)
    
    for(let i = 0; i < keys.length; i++){
        result.push(map[keys[i]])
    }
    
    return result
};