function allTheSame(elements: any[]): boolean {
    if(elements.length == 0) return true;
    let value = elements[0];
    for(let i = 1; i < elements.length; i++){
        if(elements[i] !=  value) return false 
    }
    return true;
}