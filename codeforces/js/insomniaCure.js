var w = readline()
var x = readline()
var y = readline()
var z = readline()
var limit = readline()
var count = 0;
for(var i = 1; i <= limit; i++){
    if(i % w == 0 || i % x == 0 || i % y == 0 || i % z == 0){
        count++;    
    }
}
print(count)