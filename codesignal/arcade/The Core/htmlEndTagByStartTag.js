function solution(startTag) {
    let tag = ""
    for(let i = 1; i < startTag.length; i++){ 
        if(startTag[i] === " " || startTag[i] === ">"){ break } else { tag += startTag[i] }
    }
    return "</" + tag + ">"
}
