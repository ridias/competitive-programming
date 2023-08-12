var limit = readline();
var count = 0
while(limit > 0){
    var line = readline().split(" ")
    var numPeopleInRoom = parseInt(line[0]);
    var limitRoom = parseInt(line[1])
    if(numPeopleInRoom + 2 <= limitRoom) count++
    limit--
}
 
print(count)