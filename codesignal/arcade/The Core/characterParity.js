function solution(symbol) {
    if(!isNaN(symbol) && symbol != " "){
        if(parseInt(symbol) % 2 === 0){ return "even"}
        else{ return "odd"}
    }else{
        return "not a digit"
    }
}
