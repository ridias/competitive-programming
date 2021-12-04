function longestWord(text) {
    if(text.length <= 0){ return "" }
    if(text.length === 1){ return text}
    let wordMax = ""
    let word = ""
    for(let i = 0; i < text.length; i++){
        let ascii = text.charAt(i).charCodeAt(0)
        if((ascii <= 122 && ascii >= 97) | (ascii >= 65 && ascii <= 90)){
            word += text.charAt(i)
        }else{
            if(word.length > wordMax.length) wordMax = word
            word = ""
        }
    }
    if(wordMax === "" || word.length > wordMax.length){ return word }
    return wordMax
}
