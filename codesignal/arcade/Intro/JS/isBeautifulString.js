function isBeautifulString(inputString) {
    let charCount = []
    for(let i = 0; i < 26; i++) charCount.push(0)
    
    for(let char of inputString){
        let charIndex = char.charCodeAt() - "a".charCodeAt()
        charCount[charIndex]++
    }
    
    for(let i = 1; i < charCount.length; i++){
        if(charCount[i] > charCount[i - 1]) return false
    }
    
    return true
}
