function variableName(name) {
    let pattFirstLetter = /^[a-zA-Z\_]/
    if(!pattFirstLetter.test(name.charAt(0))){ return false }
    for(let i = 1; i < name.length; i++){
        let patt = /^[a-zA-Z0-9\_]/
        if(!patt.test(name.charAt(i))){ return false }
    }
    return true
}
