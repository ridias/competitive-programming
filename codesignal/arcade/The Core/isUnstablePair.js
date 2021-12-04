function solution(filename1, filename2) {
    
    if(filename1.length >= filename2.length){
        let tmp = filename1
        filename1 = filename2
        filename2 = tmp
    }
    
    let result = filename1 > filename2
    if((filename1.toUpperCase() > filename2) !== result){ return true }
    
    if((filename1.toLowerCase() > filename2) !== result){ return true }
    
    return false
}
