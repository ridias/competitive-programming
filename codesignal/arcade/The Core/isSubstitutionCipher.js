function solution(string1, string2) {
    if(string1 === string2){ return true }
    let pairs = {}
    let alreadyTouched = []
    for(let i = 0; i < string1.length; i++){
        let pos = alreadyTouched.indexOf(string2.charAt(i))
        if(pairs[string1.charAt(i)] === undefined && pos === -1){
            pairs[string1.charAt(i)] = string2.charAt(i)
            alreadyTouched.push(string2.charAt(i))
        }else if(pairs[string1.charAt(i)] === undefined && pos !== -1){
            return false
        }else if(pairs[string1.charAt(i)] !== undefined && pairs[string1.charAt(i)] !== string2.charAt(i)){
            return false
        }
    }
    return true
}
