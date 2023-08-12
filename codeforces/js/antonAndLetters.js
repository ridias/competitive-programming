var values = readline()
var set = new Set(values.split(/[\{\}\, ]/g))
if(set.size == 0)
    print(0)
else
    print(set.size - 1)