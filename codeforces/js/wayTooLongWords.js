readline()
var value;
while(value = readline()){
    if(value.length > 10){
        print(value[0] + (value.length - 2) + value[value.length - 1])
    }else{
        print(value)
    }
}