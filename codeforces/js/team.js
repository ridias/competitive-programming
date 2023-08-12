readline()
var values;
var count = 0;
while(values = readline()){
    if(values.replace(/[ 0]/g, "").length > 1) count++
}

print(count)