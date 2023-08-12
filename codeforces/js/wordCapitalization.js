var word = readline();
var response = word.length == 0 ? "" : word[0].toUpperCase() + word.substring(1, word.length)
print(response);