function solution(min1, min2_10, min11, s) {
    
    if(s < min1){ return 0}
    if(s - min1 == 0){ return 1 }
    if(Math.floor((s - min1) / min2_10) <= 9){ return (1 + Math.floor((s - min1) / min2_10)) }
    return Math.floor(((s - min1 - (min2_10 * 9)) / min11) + 10)
    
}
