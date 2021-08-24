// https://leetcode.com/problems/print-words-vertically/

/**
 * @param {string} s
 * @return {string[]}
 */
 var printVertically = function(s) {
    
    let words = s.split(' ')
    let maxLength = 0
    for(let i = 0; i < words.length; i++){
        if(maxLength < words[i].length) maxLength = words[i].length
    }
    
    let arr = []
    let col = 0
    for(let i = 0; i < words.length; i++){
        let row = []
        for(let j = 0; j < words[i].length; j++){
            row.push(words[i][j])
        }
        
        while(row.length < maxLength) row.push(" ")
        arr.push(row)
    }

    let result = []
    for(let j = 0; j < arr[0].length; j++){
        let str = ""
        for(let i = 0; i < arr.length; i++){
            str += arr[i][j]
        }
        
        while(str[str.length - 1] == " " && str.length > 0){
            str = str.substring(0, str.length - 1)
        }
        result.push(str)
    }
    
    return result
};