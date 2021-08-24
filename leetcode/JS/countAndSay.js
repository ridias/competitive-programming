//https://leetcode.com/problems/count-and-say/

/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    let start = "1"
    
    for(let i = 1; i < n; i++){
        let aux = ""
        let count = 1
        let previous = start[0]
        for(let j = 1; j < start.length; j++){
            if(previous != start[j]){
                aux += count + previous
                count = 1
            }else{
                count++
            }
            
            previous = start[j]
        }
        
        if(count > 0){
            aux += count + start[start.length - 1];
        }
        
        start = aux;
    }
    
    return start
};