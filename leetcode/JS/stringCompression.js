// https://leetcode.com/problems/string-compression/

/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
    let previous = chars[0]
    let count = 0
    let result = []
    let currentIndex = 0
    
    for(let i = 0; i < chars.length; i++){
        
        if(chars[i] == previous){
            count++
        }else{
            chars[currentIndex] = previous
            currentIndex++
            if(count > 1){
                let num = count.toString()
                for(let j = 0; j < num.length; j++){
                    chars[currentIndex] = num[j]
                    currentIndex++
                }
            }
            
            count = 1
            previous = chars[i]
        }
    }
    
    if(count > 0){
        chars[currentIndex] = previous
        currentIndex++
        if(count > 1){
            let num = count.toString()
            for(let j = 0; j < num.length; j++){
                chars[currentIndex] = num[j]
                currentIndex++
            }
        }
    }
    
    while(currentIndex < chars.length){
        chars.pop()
    }
};