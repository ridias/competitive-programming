// https://leetcode.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false
    
    let map = {}
    let count = s1.length
    
    
    for(let i = 0; i < s1.length; i++){
        if(map[s1[i]] == undefined){
            map[s1[i]] = [0, 1]
        }else{
            map[s1[i]][1] += 1
        }
    }
    
    let i = 0
    while(i < s1.length){
        
        if(map[s2[i]] != undefined){
            let limit = map[s2[i]][1]
            let times = map[s2[i]][0]
            
            if(times < limit){
                count--
            }
            
            map[s2[i]][0] += 1
        }
        i++
    }
    
    if(count == 0) return true
    
    while(i < s2.length){
        
        if(map[s2[i - s1.length]] != undefined){
            let limit = map[s2[i - s1.length]][1]
            let times = map[s2[i - s1.length]][0]
            
            if(times <= limit){
                count++
            }
            
            map[s2[i - s1.length]][0] -= 1
        }
        
        if(map[s2[i]] != undefined){
            let limit = map[s2[i]][1]
            let times = map[s2[i]][0]
            
            if(times < limit){
                count--
            }
            
            map[s2[i]][0] += 1
        }
        
        if(count == 0) return true
        i++
    }
    
    return false
    
    
    
    
};