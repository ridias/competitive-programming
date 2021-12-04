function solution(size, nonogramField) {

    for(let i = nonogramField.length - size; i < nonogramField.length; i++){
        let queue = []
        let count = 0
        for(let j = 0; j < nonogramField[i].length; j++){
            if(/\d/.test(nonogramField[i][j])){
                queue.push(nonogramField[i][j])
            }else if(nonogramField[i][j] == "#"){
                count++
            }else if(nonogramField[i][j] == "." && count > 0){
                if(count != queue[0]){ return false }
                count = 0
                queue.shift()
            }
        }
        
        if(count > 0){
            if(count != queue[0]){ return false }
            count = 0
            queue.shift()
        }
        
        if(queue.length > 0){ return false }
    }
    
    
    
    
    for(let j = nonogramField[0].length - size; j < nonogramField[0].length; j++){
        let queue = []
        let count = 0
        for(let i = 0; i < nonogramField.length; i++){
            if(/\d/.test(nonogramField[i][j])){
                queue.push(nonogramField[i][j])
                console.log(queue)
            }else if(nonogramField[i][j] == "#"){
                count++
            }else if(nonogramField[i][j] == "." && count > 0){
                if(count != queue[0]){ return false }
                count = 0
                queue.shift()
            }
        }
        
        if(count > 0){
            if(count != queue[0]){ return false }
            count = 0
            queue.shift()
        }
        
        if(queue.length > 0){ return false }
    }
    
    return true
}
