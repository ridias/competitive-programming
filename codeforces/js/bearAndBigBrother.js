var values = readline().split(" ")
var malik = parseInt(values[0])
var other = parseInt(values[1])

var years = 0;

while(malik <= other){
    malik *= 3
    other *= 2
    years++
}

print(years)