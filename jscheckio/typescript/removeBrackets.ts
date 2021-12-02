function setBracketToResponse(response: string[], bracketArr: any[]): string[]{
    let pos = bracketArr[1]
    let bracketToSet = bracketArr[0]
    response[pos] = bracketToSet;
    return response;
}

function deleteUnnecessaryBrackets(stack: any[], removeUntilPosition: number): any[]{
    while(stack.length > 0){
        if(removeUntilPosition > stack[0][1])
            stack.shift()   
        else 
            break
    }
    
    return stack;
}

function removeBrackets(line: string): string {
    let stackParenthesis = []
    let stackSquareBracket = []
    let stackCurlyBracket = []
    
    let response = new Array(line.length).fill("")
    let closedBracket = false;
    let positionLimit = -1
    for(let i = line.length - 1; i >= 0; i--){
        if(line[i] == ")") stackParenthesis.push([")", i])
        else if(line[i] == "}") stackCurlyBracket.push(["}", i])
        else if(line[i] == "]") stackSquareBracket.push(["]", i])
        else if(line[i] == "(" && stackParenthesis.length > 0){
            closedBracket = true;
            positionLimit = stackParenthesis[0][1]
            response = setBracketToResponse(response, stackParenthesis.pop())
            response[i] = "("
        }else if(line[i] == "{" && stackCurlyBracket.length > 0){
            closedBracket = true;
            positionLimit = stackCurlyBracket[0][1]
            response = setBracketToResponse(response, stackCurlyBracket.pop())
            response[i] = "{"
        }else if(line[i] == "[" && stackSquareBracket.length > 0){
            closedBracket = true; 
            positionLimit = stackSquareBracket[0][1]
            response = setBracketToResponse(response, stackSquareBracket.pop())
            response[i] = "["
        }
        
        if(closedBracket){
            closedBracket = false;
            stackParenthesis = deleteUnnecessaryBrackets(stackParenthesis, positionLimit);
            stackCurlyBracket = deleteUnnecessaryBrackets(stackCurlyBracket, positionLimit);
            stackSquareBracket = deleteUnnecessaryBrackets(stackSquareBracket, positionLimit);
        }
    }
    
    return response.join("")
}