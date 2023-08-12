var nothing = readline();
var matches = readline();
 
var countA = 0;
var countD = 0;
 
for(var i = 0; i < matches.length; i++){
    if(matches[i] == "A") countA++
    else if(matches[i] == "D") countD++
}
 
if(countA > countD){
    print("Anton")
}else if(countA < countD){
    print("Danik")
}else{
    print("Friendship")
}