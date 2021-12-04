function solution(s1, s2) {
    
    if(s1 == s2) return false
    
    s1 = s1.split(/(\d{1,}|[a-z]{1})/).filter(w => w.length > 0)
    s2 = s2.split(/(\d{1,}|[a-z]{1})/).filter(w => w.length > 0)
    
    for(let i = 0; i < s1.length; i++){
        value  = parseInt(s1[i]) || s1[i]
        value2 =  parseInt(s2[i]) || s2[i]
        if(!isNaN(value) | !isNaN(value2)){
            n1 = isNaN(value) ? Infinity : parseInt(value)
            n2 = isNaN(value2) ? Infinity : parseInt(value2)
            if(n1 == n2) continue
            else return n1 < n2
        }
        
        if(value == value2) continue
        else return value < value2
    }
    
    if(s1.length < s2.length) return true
    
    for(i = 0; i < s1.length; i++){
        value  = s1[i].split('').filter(w => w == "0").length
        value2 = s2[i].split('').filter(w => w == "0").length
        if(value == value2) continue
        else return value > value2
    }
    return false
}
