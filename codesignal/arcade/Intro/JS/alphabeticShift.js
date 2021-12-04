function alphabeticShift(inputString) {
    let result = ""
    for(let i = 0; i < inputString.length; i++){
        let ascii = inputString.charAt(i).charCodeAt(0) + 1
        if(ascii > 122){
            result += "a"
        }else{
            result += String.fromCharCode(ascii)
        }
    }
    return result
}
