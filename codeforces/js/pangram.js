var limit = readline()
var sentence = readline()
var set = new Set()
for(var i = 0; i < sentence.length; i++){
    var letter = sentence[i].toLowerCase();
    if(/[a-z]/.test(letter)){
        set.add(letter)
    }
}

if(set.size == 26){
    print("YES")
}else{
    print("NO")
}