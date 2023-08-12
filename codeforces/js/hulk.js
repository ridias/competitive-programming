var limit = parseInt(readline())
var i = 1;
var response = ""
while(i <= limit - 1){
    
    if(i % 2 == 0){
        response += "I love that "
    }else{
        response += "I hate that "
    }
    
    i++;
}
 
if(limit % 2 == 0){
    response += "I love it"
}else{
    response += "I hate it"
}
 
print(response)