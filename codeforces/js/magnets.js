var limit = parseInt(readline())
var previous = readline()
limit--
var count = 1
while(limit > 0){
    var current = readline()
    if(current != previous){
        count++
    }
    
    previous = current 
    limit--
}
 
print(count)