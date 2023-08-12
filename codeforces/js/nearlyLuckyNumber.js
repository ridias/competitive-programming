var value = readline()
 
var count = 0;
 
for(var i = 0; i < value.length; i++){
    if(value[i] == "4" || value[i] == "7") count++
}
 
var response = "YES"
if(count == 0) response = "NO"
while(count > 0){
    var digit = count % 10;
    if(digit != 7 && digit != 4){
        response = "NO"
        break;
    }
    count = Math.floor(count / 10)
}
 
print(response)