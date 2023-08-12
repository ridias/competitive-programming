var line = readline().split(" ")
var names = readline().split(" ")
var limitPage = line[1]
var remaining = 0;
var responseArray = []
for(var i = 0; i < names.length; i++){
    var numOfNames = parseInt(names[i]) + remaining
    responseArray.push(Math.floor(numOfNames / limitPage))
    remaining = numOfNames % limitPage
}

print(responseArray.join(" "))