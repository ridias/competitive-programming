var range = readline().split(" ").map(x => parseInt(x))
var values = readline().split(" ").map(x => parseInt(x))
var count = 0;

for(var i = 0; i < values.length; i++){
    if(values[i] <= range[0] && values[i] >= range[1]) count++
}

print(count)