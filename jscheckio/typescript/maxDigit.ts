function maxDigit(value: number): number {
    let max = value % 10;
    
    while(value > 0){
        let digit: number = value % 10;
        if(digit > max) max = digit
        value = Math.floor(value / 10)
    }
    
    return max;
}