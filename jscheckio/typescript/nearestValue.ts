function nearestValue(values: number[], search: number): number {
    let response: number = values[0]
    
    for(let i = 1; i < values.length; i++){
        let diffResponse = Math.abs(response - search)
        let diffToCheck = Math.abs(values[i] - search)
        if(diffResponse > diffToCheck){
            response = values[i]
        }else if(diffResponse == diffToCheck && response > values[i]){
            response = values[i]   
        }
    }
    
    return response;
}