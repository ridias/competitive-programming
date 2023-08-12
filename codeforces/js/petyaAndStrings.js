var testCase = readline()
var testCase2 = readline()
var response = 0

for(var i = 0; i < testCase.length; i++){
    if(testCase[i].toLowerCase() < testCase2[i].toLowerCase()){
        response = -1;
        break;
    }else if(testCase[i].toLowerCase() > testCase2[i].toLowerCase()){
        response = 1
        break;
    }
}

print(response)

/*
var testCase = readline()
var testCase2 = readline()
print(testCase.toLowerCase().localeCompare(testCase2.toLowerCase()))
*/