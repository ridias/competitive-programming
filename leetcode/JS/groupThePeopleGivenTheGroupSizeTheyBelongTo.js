// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
 var groupThePeople = function(groupSizes) {
    map = {}
    result = []
    for(let i = 0; i < groupSizes.length; i++){
        g = groupSizes[i]
        if(map[g] == undefined){
            map[g] = [i]
        }else if(map[g].length == g){
            result.push(map[g])
            map[g] = [i]
        }else{
            map[g].push(i)
        }
    }
    
    let keys = Object.keys(map)
    for(let i = 0; i < keys.length; i++){
        result.push(map[keys[i]])
    }

    return result    
};

