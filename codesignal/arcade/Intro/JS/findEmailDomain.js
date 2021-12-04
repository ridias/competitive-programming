function findEmailDomain(address) {
    let result = ""
    for(let i = address.length - 1; i >= 0; i--){
        if(address[i] === "@"){ break } else { result = address[i] + result }
    }
    return result
}
