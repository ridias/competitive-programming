// https://leetcode.com/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    
    let map = {}
    let result = []
    if(p.length > s.length) return result
    let count = p.length
    
    for(let i = 0; i < p.length; i++){
        if(map[p[i]] == undefined){
            map[p[i]] = [0, 1]
        }else{
            map[p[i]][1] += 1
        }
    }
    
    
    for(let i = 0; i < p.length; i++){
        
        if(map[s[i]] != undefined){
            let limit = map[s[i]][1]
            let times = map[s[i]][0]
            if(times + 1 <= limit){
                count--
            }
            map[s[i]][0] += 1
        }
    }
    
    if(count == 0) result.push(0)
    
    for(let i = p.length; i < s.length; i++){
        if(map[s[i - p.length]] != undefined){
            let limit = map[s[i - p.length]][1]
            let times = map[s[i - p.length]][0]
            if(times - 1 < limit){
                count++
            }
            map[s[i - p.length]][0] -= 1
        }
        
        if(map[s[i]] != undefined){
            let limit = map[s[i]][1]
            let times = map[s[i]][0]
            if(times + 1 <= limit){
                count--
            }
            map[s[i]][0] += 1
        }
        
        if(count == 0){
            result.push(i - p.length + 1)
        }
    }
    
    return result
};