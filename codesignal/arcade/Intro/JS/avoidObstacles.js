function avoidObstacles(inputArray) {
    let max = Math.max(...inputArray)
    for(let i = 2; i <= max; i++){
        let position = i
        let founded = true
        while(position <= max){
            if(!inputArray.includes(position)){ position = position + i }
            else { 
                founded = false; 
                break 
            }
        }
        if(founded === true){ return i }
    }
    return (max + 1)
}
