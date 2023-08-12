var value = readline()
var response = ""

for(var i = 0; i < value.length; i++){
    if(!/[AEIOUYaeiouy]/.test(value[i])){
        response += "." + value[i].toLowerCase()
    }
}

print(response)