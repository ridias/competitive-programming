function numberLength(value: number): number {
    if(value == 0) return 1
    let count: number = 0;
    while(value > 0){
        count++;
        value = Math.floor(value / 10)   
    }
    
    return count;
}