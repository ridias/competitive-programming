function solution(formation, k) {
    k = k % 6
    
    for(let i = 0; i < k; i++){
        let tmp = formation[0][1]
        formation[0][1] = formation[1][2]
        formation[1][2] = formation[3][2]
        formation[3][2] = formation[2][1]
        formation[2][1] = formation[3][0]
        formation[3][0] = formation[1][0]
        formation[1][0] = tmp
    }
    return formation
}
