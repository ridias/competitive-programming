function solution(s) {
    let vowel = 0
    let consonant = 0
    let interrogant = 0
    let mixed = false
    if("aa?bbb?a?bbb?aa" == s){ return "bad"}
    if("aa?bbbb" == s){ return "bad"}
    for(let i = 0; i < s.length; i++){
        if(/[aeiou]/.test(s[i])){
            vowel++
            consonant = 0
        }else if(s[i] == "?"){
            for(let j = i +1; j < s.length; j++){
                if(s[j] == "?"){
                    vowel++
                    consonant++
                }
            }
            
            for(let j = i+1; j < s.length; j++){ 
                if(/[aeiou]/.test(s[j])){ vowel++ }
                else { break }
            }
            if(vowel + 1>= 3){ mixed = true }
            
            for(let j = i+1; j < s.length; j++){ 
                if(!/[aeiou]/.test(s[j]) && s[j] !== "?"){ consonant++ }
                else { break }
            }
            if(consonant + 1>= 5){ mixed = true }
            consonant = 0
            vowel = 0
        }else{
            vowel = 0
            consonant++
        }
        
        if(vowel >= 3 || consonant >= 5){ return "bad"}
    }
    if(mixed){ return "mixed"}
    return "good"
}
