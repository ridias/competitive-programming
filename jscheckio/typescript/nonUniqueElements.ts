function nonUniqueElements(data: number[]): number[] {
    let map = {}
    
    for(let i = 0; i < data.length; i++){
        map[data[i]] == undefined ? map[data[i]] = 1 : map[data[i]] += 1   
    }
    
    let response = []
    
    for(let i = 0; i < data.length; i++){
        if(map[data[i]] > 1) response.push(data[i])   
    }
    
    return response;
}