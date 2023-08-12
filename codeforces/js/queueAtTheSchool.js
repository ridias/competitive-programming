var values = readline().split(" ")
var queue = readline().split('')
 
var times = values[1]
 
while(times > 0){
    
    var i = 0;
    var change = false 
    while(i < queue.length){
        if(queue[i] == "G" && queue[i-1] == "B"){
           var tmp = queue[i];
           queue[i] = queue[i-1]
           queue[i-1] = tmp
           change = true;
           i+= 2
        }else{
            i++
        }
    }
    
    if(!change) break;
    times--
}
 
print(queue.join(""))