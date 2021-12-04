function solution(numerator, denominator) {
    
    let commonDivisor = gcd(numerator, denominator)
    let result = [numerator/commonDivisor, denominator / commonDivisor]
    
    if(0 > result[1]){
        result[0] = -result[0]
        result[1] = -result[1]
    }
    
    return result

}

function gcd(a, b){
    if(!b){
        return a
    }
    return gcd(b, a % b)
}
