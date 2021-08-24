// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

/**
 * @param {string} s
 * @return {number}
 */
 var numberOfSubstrings = function(s) {
    let map = {}
    map['a'] = []
    map['b'] = []
    map['c'] = []
    let count = 0;
    for(let i = 0; i < s.length; i++){
        map[s[i]] == undefined ? map[s[i]] = [i] : map[s[i]].push(i)
    }
    
    if(map['a'].length == 0 || map['b'].length == 0 || map['c'].length == 0) return count
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'a' && map['b'].length > 0 && map['c'].length > 0){
            map[s[i]].shift();
            count += (s.length - Math.max(map['b'][0], map['c'][0]))
        }else if(s[i] == 'b' && map['a'].length > 0 && map['c'].length > 0){
            map[s[i]].shift();
            count += (s.length - Math.max(map['c'][0], map['a'][0]))
        }else if(s[i] == 'c' && map['b'].length > 0 && map['a'].length > 0){
            map[s[i]].shift();
            count += (s.length - Math.max(map['a'][0], map['b'][0]))
        }
    }
    
    console.log(map)
    
    return count;
};