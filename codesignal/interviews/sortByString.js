function solution(s, t) {
    let letters = {}
    for(let i = 0; i < s.length; i++){
        letters[s[i]] === undefined ? letters[s[i]] = 1 : letters[s[i]] += 1
    }
    
    let result = ""
    for(let i = 0; i < t.length; i++){
        result += t[i].repeat(letters[t[i]])
    }
    return result
}
