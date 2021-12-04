function solution(message) {
    if(message.length === 1){ return message }
    let resultString = message.charAt(0)
    let result = Math.abs(97 - (message.charAt(0).charCodeAt(0) % 123))
    for(let i = 1; i < message.length ; i++){
        let temp = 0
        for(let j = 0; j < 26; j++){
            result++
            temp++
            let actualLetter = Math.abs(97 - message.charAt(i).charCodeAt(0))
            if(result % 26 === actualLetter){
                if(String.fromCharCode(temp + 97) === "{"){
                    resultString += "a"
                }else{
                    resultString += String.fromCharCode(temp + 97)
                }
                break
            }
        }
    }
    
    return resultString
}
