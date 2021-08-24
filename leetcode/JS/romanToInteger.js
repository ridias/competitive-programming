//https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    a = "I 1 IV 4 V 5 IX 9 X 10 XL 40 L 50 XC 90 C 100 CD 400 CDXC 490 D 500 CM 900 CMXC 990 M 1000".split(" ")
    
    i = a.length - 2
    r = 0
    while(i >= 0){
        if(s.substr(0, a[i].length) == a[i]){
            r += a[i+1] * 1
            s = s.substring(0 + a[i].length, s.length)
        }else{
            i -= 2
        }
    }
    return r
};