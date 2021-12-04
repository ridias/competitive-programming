function longestDigitsPrefix(inputString) {
    let number = ""
    if(isNaN(inputString.charAt(0)) && inputString.charAt(0) !== " "){ return "" } 
    else{
        for(let i in inputString){
            if(!isNaN(inputString.charAt(i)) && inputString.charAt(i) !== " "){ number += inputString.charAt(i) } else { break }
        }
    }
    return number
}