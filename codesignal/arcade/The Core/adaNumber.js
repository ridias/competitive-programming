function solution(line) {
    line = line.replace(/\_/g, "")
    if(line == ""){ return false }
    if(!/#/.test(line) && !/[aAbBcCdDeEfF]/.test(line)){ return true }
    if(line[0] == "#" || /#{2,}/.test(line)){ return false }
    if(line[line.length - 1] !== "#"){ return false }

    line = line.split("#")
    if(line[line.length - 1] == ""){ line.pop() }
    if(parseInt(line[0]) > 16 || parseInt(line[0]) < 2){ return false }
    if(line.length % 2 != 0 && line.length > 1){ return false }
    for(let i = 1; i < line.length; i+=2){
        let base = line[i-1]
        let num = line[i]
        if(parseInt(base) > 16 || parseInt(base) < 2){ return false }
        if(!isNumFromSpecificBase(num, base)){ return false }
    }
    
    return true
}


function isNumFromSpecificBase(num, base){
    let p = ""
    for(let i = 0; i < base; i++){
        i == 10 ? p += "aA" : i == 11 ? p += "bB" : i == 12 ? p += "cC" : i == 13 ? p += "dD" : i == 14 ? p += "eE" : i == 15 ? p += "fF" : p += i
    }

    z = new RegExp("[" + p + "]", "")
    
    for(let j = 0; j < num.length; j++){
        if(!z.test(num[j])){ return false }
    }
    
    return true
    
}
