// https://leetcode.com/problems/reconstruct-original-digits-from-english/

/**
 * @param {string} s
 * @return {string}
 */
 var originalDigits = function(s) {
    let map = {
        'z': 0,
        'x': 0,
        'w': 0,
        's': 0,
        'r': 0,
        'h': 0,
        'v': 0,
        'i': 0,
        'n': 0,
        'u': 0
    }
    
    let result = ""
    
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] != undefined) 
            map[s[i]] += 1
    }
    
    if(map['z'] != undefined){
        result += '0'.repeat(map['z'])
        map['r'] -= map['z']
    }
    
    if(map['x'] != undefined){
        result += '6'.repeat(map['x'])
        map['s'] -= map['x']
        map['i'] -= map['x']
    }
    
    if(map['w'] != undefined){
        result += '2'.repeat(map['w'])
    }
    
    if(map['s'] != undefined){
        result += '7'.repeat(map['s'])
        map['v'] -= map['s']
        map['n'] -= map['s']
    }
    
    if(map['u'] != undefined && map['u'] >= 0){
        result += '4'.repeat(map['u'])
        map['r'] -= map['u']
    }
    
    if(map['r'] != undefined && map['r'] >= 0){
        result += '3'.repeat(map['r'])
        map['h'] -= map['r']
    }
    
    if(map['h'] != undefined && map['h'] >= 0){
        result += '8'.repeat(map['h'])
        map['i'] -= map['h']
    }
    
    if(map['v'] != undefined){
        result += '5'.repeat(map['v'])
        map['i'] -= map['v']
        map['f'] -= map['v']
    }
    
    if(map['i'] != undefined){
        result += '9'.repeat(map['i'])
        map['n'] -= map['i'] * 2
    }
    
    if(map['n'] != undefined){
        result += '1'.repeat(map['n'])
    }
    
    if(map['f'] != undefined){
        result += '4'.repeat(map['f'])
    }
    
    return result.split('').sort((a, b) => a.localeCompare(b)).join('')
    
};