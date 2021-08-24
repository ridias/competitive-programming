// https://leetcode.com/problems/find-the-town-judge/

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(N, trust) {
    
    if(N == 1 && trust.length == 0) return 1
    
    let max = -1
    let maximums = []
    let map = {}
    let members = {}
    let count = 0
    for(let i = 0; i < trust.length; i++){
        
        if(members[trust[i][0]] == undefined){
            members[trust[i][0]] = 1
            count++
        }
        
        if(map[trust[i][1]] == undefined){
            map[trust[i][1]] = 1
        }else{
            map[trust[i][1]] += 1
        }
        
        if(max < map[trust[i][1]]){
            max = map[trust[i][1]]
            maximums = [trust[i][1]]
        }else if(max == map[trust[i][1]]){
            maximums.push(trust[i][1])
        }
        
        if(count >= N) return -1
    }
    
    if(maximums.length > 1 || maximums.length == 0) return -1
    
    return N - map[maximums[0]] == 1 ? maximums[0] : -1
};