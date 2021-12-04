function solution(commands) {
    let count = 0
    let solution = 1
    for(let i = 0; i < commands.length; i++){
        if((commands.charAt(i) == "L" || commands.charAt(i) == "R") && solution == 1){
            solution = 0
        }else if(commands.charAt(i) == "A" && solution == 1){
            count++
        }else if((commands.charAt(i) == "L" || commands.charAt(i) == "R") && solution == 0){
            count++; 
            solution = 1;
        } 
    }
    
    return count
}
