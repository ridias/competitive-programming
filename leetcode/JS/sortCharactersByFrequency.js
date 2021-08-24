// https://leetcode.com/problems/sort-characters-by-frequency/

/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    if(s.length < 3) return s
    
    let map = {}
    
    for(let i = 0; i < s.length; i++){
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1
    }
    
    let arr = []
    let keys = Object.keys(map)
    
    for(let i = 0; i < keys.length; i++){
        arr.push([keys[i], map[keys[i]]])
    }
    
    arr.sort((a, b) => b[1] - a[1])
    let response = ""
    for(let i = 0; i < arr.length; i++){
        response += arr[i][0].repeat(arr[i][1])
    }
    
    return response
};