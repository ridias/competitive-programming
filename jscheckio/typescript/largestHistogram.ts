function largestHistogram(values: number[]): number {
    let count = 0
    let max = 0
    let map = {}
    if(values.length == 1) return values[0]
    
    for(let i = 0; i < values.length; i++){
        let num = values[i]
        let count = 0;
        if(map[num] == undefined){
            for(let j = 0; j < values.length; j++){
                if(num <= values[j]){
                    count++      
                }else{
                    if(count * num > max){
                        max = count * num
                    }
                    count = 0
                }
            }
            
            if(count * num > max){
                max = count * num
            }
        }
        
        map[num] = 1
    }
    
    return max;
}