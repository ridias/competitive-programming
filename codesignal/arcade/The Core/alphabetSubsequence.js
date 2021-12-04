function solution(s) {
    let alreadyTested = []
    let maxChar = 96
    for(let i = 0; i < s.length; i++){
        if(maxChar < s.charAt(i).charCodeAt(0)){
            maxChar = s.charAt(i).charCodeAt(0)
        }else if(maxChar >= s.charAt(i).charCodeAt(0)){
            return false
        }
    }
    return true
}
