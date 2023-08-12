var value = readline()
var reverseValue = readline()
 
var isReversed = "YES";
var i = 0;
 
while(i < value.length){
    if(value[i] != reverseValue[reverseValue.length - 1 - i]){
        isReversed = "NO"
        break;
    }
    i++
}
 
print(isReversed)