var len = readline();
var stones = readline();
var count = 0;

for(var i = 1; i < stones.length; i++){
    if(stones[i-1] == stones[i]) count++
}

print(count)