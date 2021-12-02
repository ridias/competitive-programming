function backwardString(value: string): string {
    let response: string = "";
    for(let i = value.length - 1; i >= 0; i--){
        response = response + value[i]   
    }
    
    return response;
}