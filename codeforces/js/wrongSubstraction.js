var values = readline().split(" ")
var num = parseInt(values[0])
var times = parseInt(values[1])

while(times > 0){
    if(num % 10 == 0){
        num /= 10
    }else{
        num--
    }
    times--
}

print(num)