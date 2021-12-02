function brackets(expr: string): boolean {
    let stack = []
    for(let i = 0; i < expr.length; i++){
        if(expr[i] == "(" || expr[i] == "{" || expr[i] == "["){
            stack.push(expr[i])   
        }else if(expr[i] == ")" || expr[i] == "}" || expr[i] == "]"){
            let leftBracket = stack.pop()
            if(expr[i] == ")" && leftBracket != "("){
                return false;
            }else if(expr[i] == "}" && leftBracket != "{"){
                return false;
            }else if(expr[i] == "]" && leftBracket != "["){
                return false;   
            }
        }
    }
    
    if(stack.length > 0) return false;
    
    return true;
}