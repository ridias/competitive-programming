var limit = readline()

while(limit > 0){
    var num = readline();
    var map = {}
    var count = 0;
    while(num > 2){
        
        if(map[num] == undefined){
            map[num] = 1
        }else{
            count = -1;
            break;
        }
        
        if(num % 6 == 0){
            num /= 6
        }else{
            num *= 2;
        }
        count++;
    }
    print(count)
    limit--
}