function solution(p) {
    p = p.split(";")
    let countWhite = countMoves("b1", p[0]) + countMoves("g1", p[1])
    let countBlack = countMoves("b8", p[2]) + countMoves("g8", p[3])
    return countWhite - countBlack == -1 ? false : countWhite <= countBlack ? true : false
}

function countMoves(start, finish){
    
    num = (start[0].charCodeAt(0) - 97 + 1) + "" + start[1]
    f = (finish[0].charCodeAt(0) - 97 + 1) + "" + finish[1]
    m = null
    let q = [[num, 0]]
    while(q.length > 0){
        m = q.shift()
        if(m[0] == f){ break }
        l = parseInt(m[0][0])
        r = parseInt(m[0][1])
        if(l - 2 >= 0 & r - 1 >= 0) q.push([(l - 2) + "" + (r - 1), m[1] + 1])
        if(l - 2 >= 0 & r + 1 <= 8) q.push([(l - 2) + "" + (r + 1), m[1] + 1])
        if(l + 2 <= 8 & r - 1 >= 0) q.push([(l + 2) + "" + (r - 1), m[1] + 1])
        if(l + 2 <= 8 & r + 1 <= 8) q.push([(l + 2) + "" + (r + 1), m[1] + 1])
        if(l - 1 >= 0 & r - 2 >= 0) q.push([(l - 1) + "" + (r - 2), m[1] + 1])
        if(l - 1 >= 0 & r + 2 <= 8) q.push([(l - 1) + "" + (r + 2), m[1] + 1])
        if(l + 1 <= 8 & r - 2 >= 0) q.push([(l + 1) + "" + (r - 2), m[1] + 1])
        if(l + 1 <= 8 & r + 2 <= 8) q.push([(l + 1) + "" + (r + 2), m[1] + 1])
    }
    return m[1]
}
