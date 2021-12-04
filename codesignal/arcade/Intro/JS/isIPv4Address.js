function isIPv4Address(inputString) {
    let address = inputString.split(".")
    if(address.length != 4){
        return false
    }else{
        for(let i = 0; i < address.length; i++){
            if(parseFloat(address[i]) > 255 || parseFloat(address[i]) < 0 || address[i] == "" || !isValidNumber(address[i])){ return false }
        }
        return true
    }
}

function isValidNumber(value){
    for(let i = 0; i < value.length; i++){
        if(!Number.isInteger(parseInt(value[i]))){ return false }
    }
    return true
}
