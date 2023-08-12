var value = readline()
 
var countUpper = 0;
var countLower = 0;
 
for(var i = 0; i < value.length; i++){
    if(/[A-Z]/.test(value[i])){
        countUpper++;
    }else if(/[a-z]/.test(value[i])){
        countLower++;
    }
}
 
if(countUpper > countLower){
    print(value.toUpperCase())
}else{
    print(value.toLowerCase())
}