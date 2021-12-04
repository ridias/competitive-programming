function solution(level, pos) {
    
    const findIt = function(level, pos){
        if(level === 1){ return "E" }
        if(findIt(level-1, Math.floor((pos+1)/2)) === "D"){ return pos % 2 === 0 ? "E" : "D" }
        return pos % 2 === 0 ? "D" : "E"
    }
    
    return findIt(level, pos) === "E" ? "Engineer" : "Doctor"
    
}
