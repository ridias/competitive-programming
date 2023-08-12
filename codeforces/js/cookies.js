var limit = readline()
var values = readline().split(" ")
var sum = 0;
var count = 0;
for(var i = 0; i < values.length; i++){
    sum += parseInt(values[i])
}

for(var i = 0; i < values.length; i++){
    if((sum - parseInt(values[i])) % 2 == 0){
        count++
    }
}

print(count)