function solution(s) {
    let result = ""
    for(let i = 0; i < s.length; i++){
        'A' <= s.charAt(i) && 'Z' >= s.charAt(i) ? result += " " + s.charAt(i).toLowerCase() : result+= s.charAt(i)
    }
    return result.charAt(0) === " " ? result.substring(1, result.length) : result
}
