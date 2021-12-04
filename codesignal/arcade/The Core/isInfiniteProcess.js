function solution(a, b) {
    if(a > b ){ return true}
    else if((a % 2 == 0 && b % 2 == 1) || (a % 2 == 1 && b % 2 == 0)){ return true}
    return false
}
