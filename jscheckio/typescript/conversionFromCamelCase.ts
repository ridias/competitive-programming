function fromCamelCase(name: string): string {
    let response = name[0].toLowerCase()
    for(let i = 1; i < name.length; i++){
        response = /[A-Z]/.test(name[i]) ? response + "_" + name[i].toLowerCase() : response + name[i]
    }
    return response;
}