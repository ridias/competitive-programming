function solution(s, t) {
    let count = 0
    s = s.split("")
    t = t.split("")
    for(let i = 0; i < s.length; i++){
        let founded = false
        for(let j = 0; j < t.length; j++){
            if(s[i] === t[j]){
                founded = true
                t.splice(j, 1)
                break
            }
        }
        if(founded === false){ count++}
    }
    return count
}
