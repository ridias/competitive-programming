function solution(s, t) {
    if(t.length === 0 || s.length === 0){ return "" }
    let letters = new Set()
    for(let i = 0; i < t.length; i++){
        letters.add(t.charAt(i))
    }
    
    for(let i = t.length; i <= s.length; i++){
        for(let j = 0; j < s.length - i + 1; j++){
            let value = s.substring(j, j+i)
            let tested = {}
            let count = 0
            for(let k = 0; k < value.length; k++){
                if(letters.has(value.charAt(k)) && tested[value.charAt(k)] === undefined){
                    count++
                    tested[value.charAt(k)] = 1
                }
            }
            if(count === letters.size) return value
        }
    }
}
