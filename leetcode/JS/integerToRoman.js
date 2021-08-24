//https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(n) {
    a = "I 1 IV 4 V 5 IX 9 X 10 XL 40 L 50 XC 90 C 100 CD 400 CDXC 490 D 500 CM 900 CMXC 990 M 1000".split(" ")
    
    i = a.length - 1
    r = ""
    while(i > 0){
        if(a[i] <= n){
            r += a[i-1]
            n -= 1 * a[i]
        }else{
            i -= 2
        }
    }
    return r
};