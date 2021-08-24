// https://leetcode.com/problems/remove-k-digits/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
    if(num.length <= k) return "0"
    
    while(k > 0){
        let posToRemove = -1
        let max = -1
        if(num[0] > num[1] && num[1] == 0){
            num = num.substring(1, num.length)
        }else{
            for(let i = 0; i < num.length - 1; i++){

                if(num[i] > num[i+1]){
                    if(num[i] > max){
                        max = num[i]
                        posToRemove = i
                        break
                    }
                }
            }
            
            if(max == -1){
                num = num.substring(0, num.length - 1)
            }else{
                num = num.substring(0, posToRemove) + num.substring(posToRemove+1, num.length)
            }
        }
        
        k--
    }
    
    while(num[0] == 0 && num.length > 1){
        num = num.substring(1, num.length)
    }
    
    return num
};