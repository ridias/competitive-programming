var year = readline()
 
var isDistinct = false;
while(!isDistinct){
    year++;
    aux = year
    var map = {}
    var found = true;
    while(aux > 0){
        var digit = aux % 10;
        if(map[digit] == undefined){
            map[digit] = 1
        }else{
            found = false
            break;
        }
        
        aux = Math.floor(aux / 10)
    }
    
    if(found) isDistinct = true
    
}
 
print(year)