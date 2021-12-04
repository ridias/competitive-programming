function solution(n, m) {
    
    //it helps me: https://www.youtube.com/watch?v=6KmhCKxFWOs
    
    const extendedGCD = (a, b) => {
        if(a == 0){
            return [b, 0, 1]
        }else{
            let result = extendedGCD(b % a, a)
            let g = result[0]
            let s = result[1]
            let t = result[2]
            return [g, t - Math.floor(b / a) * s, s]
        }
    }
    
    let extended = extendedGCD(n, m)
    
    if(extended[0] != 1){ return -1 }
    return extended[1] % m < 0 ? extended[1] % m + m : extended[1] % m
}
