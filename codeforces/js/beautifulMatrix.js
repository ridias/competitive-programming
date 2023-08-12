var x = 0;
var y = 0;

var found = false;
var line = readline()
while(line != null && !found){
    var lineSplitted = line.split(' ')
    for(var i = 0; i < lineSplitted.length; i++){
        if(lineSplitted[i] == "1"){
            y = i;
            found = true;
            break;
        }
    }
    
    if(found) break;
    x++;
    line = readline()
}

print(Math.abs(2 - x) + Math.abs(2 - y))