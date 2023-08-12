var limit = readline()

while(limit > 0){
    var values = readline()
    var valuesSplitted = values.split(" ")
    if(parseInt(valuesSplitted[0]) % parseInt(valuesSplitted[1]) == 0){
        print("YES")
    }else{
        print("NO")
    }
    limit--
}