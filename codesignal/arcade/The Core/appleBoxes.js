function solution(k) {
    let yellow = 1
    let red = 0
    for(let i = 2; i <= k; i++){
        if(i % 2 === 1){ yellow += i * i} else { red += i * i}
    }
    return (red - yellow)
}
