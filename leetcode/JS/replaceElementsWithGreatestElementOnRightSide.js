// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    
    let stack = []
    for(let i = 0; i < arr.length - 1; i++){
        setMax = false
        if(stack.length > 0){
            if(stack[stack.length - 1][0] < i){
                arr[i] = stack[stack.length - 1][1]
                setMax = true
            }
        }
        
        if(!setMax){
            let max = arr[i+1]
            let pos = i+1
            for(let j = i+2; j < arr.length; j++){
                if(max < arr[j]){
                    max = arr[j]
                    pos = j
                }
            }
            
            stack.push([pos, max])
            arr[i] = max
        }
    }
    
    arr[arr.length - 1] = -1
    return arr
};