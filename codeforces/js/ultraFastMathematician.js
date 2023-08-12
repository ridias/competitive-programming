var num1 = readline()
var num2 = readline()
var response = ""
for(var i = 0; i < num1.length; i++){
    if(num1[i] == "1" && num2[i] == "1") response += "0"
    else if(num1[i] == "0" && num2[i] == "1") response += "1"
    else if(num1[i] == "1" && num2[i] == "0") response += "1"
    else response += "0"
}
print(response)