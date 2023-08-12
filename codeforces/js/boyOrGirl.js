var name = readline();
var map = {}
var count = 0;
for(var i = 0; i < name.length; i++){
    if(map[name[i]] == undefined){
        map[name[i]] = 1
        count++;
    }
}

if(count % 2 == 1)
    print("IGNORE HIM!")
else
    print("CHAT WITH HER!")