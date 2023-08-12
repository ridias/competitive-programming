var limit = readline()
var values = readline().split(" ")
var count = 0;
 
for(var i = 0; i < values.length; i++){
    if(values[i] == "1"){
        count++
        break
    }
}
 
if(count > 0){
    print("HARD")
}else{
    print("EASY")
}