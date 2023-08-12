var line;
let set = new Set()

while(line = readline()){
    set.add(line % 42)
}

print(set.size)