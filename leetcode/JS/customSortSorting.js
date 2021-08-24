// https://leetcode.com/problems/custom-sort-string/

/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
 var customSortString = function(order, str) {
    let map = {}
    for(let i = 0; i < order.length; i++){
        if(map[order[i]] == undefined){
            map[order[i]] = ""
        } 
    }
    
    map["undefined"] = ""
    let result = ""
    for(let i = 0; i < str.length; i++){
        if(map[str[i]] != undefined){
            map[str[i]] += str[i]
        }else{
            map["undefined"] += str[i]
        }
    }
    
    for(let i = 0; i < order.length; i++){
        if(map[order[i]] != undefined){
            result += map[order[i]]
        }
    }
    
    return result + map["undefined"]
};