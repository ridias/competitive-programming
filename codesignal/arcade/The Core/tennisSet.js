function solution(score1, score2) {
    if((score1 == 7 && score2 == 6) || (score1 == 6 && score2 == 7)){ return true }
    if((score1 == 7 && 5 == score2) || (score1 == 6 && 4 >= score2) ){ return true }
    if((score2 == 7 && 5 == score1) || (score2 == 6 && 4 >= score1)){ return true}
    return false
}
