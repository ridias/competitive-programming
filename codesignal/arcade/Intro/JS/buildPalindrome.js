function buildPalindrome(st) {
    if(isPalindrome(st)){ return st }
    let lastLetter = st.charAt(st.length - 1)
    let founded = false
    let result = ""
    for(let i = 0; i < st.length; i++){
        result = st.charAt(i) + result
        if(isPalindrome((st + result))){ break }
    }
    return st + result
}

function isPalindrome(value){
    let firstPart = value.substr(0, Math.floor(value.length / 2))
    let secondPart = null
    if(value.length % 2 === 0){
        secondPart = value.substr(Math.floor(value.length / 2), value.length).split("").reverse().join("")
    }else{
        secondPart = value.substr(Math.floor(value.length / 2) + 1, value.length).split("").reverse().join("")
    }
    return (firstPart === secondPart) ? true : false
}
