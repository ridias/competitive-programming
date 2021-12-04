function sumUpNumbers(inputString) {
    let result = 0
    let number = ""
    for(let i in inputString){
        if(inputString.charAt(i).charCodeAt(0) >= 48 && inputString.charAt(i).charCodeAt(0) <= 57){
            number += inputString.charAt(i)
        }else if(number !== ""){
            result += parseInt(number)
            number = ""
        }
    }
    if(number.length !== 0){ result += parseInt(number) }
    return result
}
