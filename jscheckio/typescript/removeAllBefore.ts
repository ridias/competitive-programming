function removeAllBefore(values: number[], b: number): number[] {
    let stop: boolean = false;
    let i: number = 0;
    let response: number[] = []
    while(i < values.length && values[i] != b){
        i++   
    }
    
    if(values.length == i) return values;
    
    while(i < values.length){
        response.push(values[i])
        i++
    }
    
    return response;
}