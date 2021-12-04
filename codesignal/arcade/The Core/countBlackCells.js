function solution(n, m) {

    var gcd = function(a, b){
        if(!b) return a
        return gcd(b, a % b)
    }
    if(n === m){ return (m + n - gcd(m,n) + ((m - 1) * 2))}
    return (m + n + gcd(m,n) - 1)
}
