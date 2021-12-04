function messageFromBinaryCode(code) {
    let result = ""
    let endLoop = Math.round(code.length / 8)
    for(let i = 0; i < endLoop; i++){
        result = String.fromCharCode(parseInt(code.substring(code.length - 8, code.length), 2)) + result
        code = code.substring(0, code.length - 8)
    }
    return result
}
