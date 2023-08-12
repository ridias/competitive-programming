let max = 0;
var cards = readline().split(" ")

let map = {}

for(let i = 0; i < cards.length; i++){
    if(map[cards[i][0]] == undefined){
        map[cards[i][0]] = 1
    }else{
        map[cards[i][0]] += 1
    }

    if(max <  map[cards[i][0]]) max = map[cards[i][0]]
}

print(max)