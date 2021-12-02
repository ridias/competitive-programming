function toCamelCase(name: string): string {
    let response: string = name[0].toUpperCase();
    let i = 1;
    while(i < name.length){
        if(name[i-1] == "_"){
            response += name[i].toUpperCase()
        }else if(name[i] != "_"){
            response += name[i]
        }
        i++;
    }
    
    
    return response;
}