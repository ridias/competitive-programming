function endZeros(value: number): number {
    let count: number = 0;
    if(value == 0) return 1
    
    while(value > 0){
        if(value % 10 == 0) 
            count++
        else
            break;
        value = Math.floor(value / 10);
    }
    
    return count;
}