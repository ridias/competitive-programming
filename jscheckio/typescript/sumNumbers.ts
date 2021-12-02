function sumNumbers(test: string): number {
    let testSplitted = test.split(" ")
    let sum = 0
    for(let i = 0; i < testSplitted.length; i++){
        if(/^[0-9]{1,}$/.test(testSplitted[i])) 
            sum += parseInt(testSplitted[i])
    }
    
    return sum;
}