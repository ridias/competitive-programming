function solution(cipher) {
    let result = ""
    let code = ""
    for(let i = 0; i < cipher.length; i++){
        code += cipher.charAt(i)
        if(parseInt(code) >= 97 && parseInt(code) <= 122){
            result += String.fromCharCode(parseInt(code))
            code = ""
        }
    }
    return result
}
