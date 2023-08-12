const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let values = []

function noDuplicate(values){
    let map = {}
    for(let i = 0; i < values.length; i++){
        if(map[values[i]] == undefined){
            map[values[i]] = 1
        }else{
            return "no"
        }
    }

    return "yes"
}


rl.on('line', (line) => {
    lineCount++
    values = line.split(' ');
    console.log(noDuplicate(values))
    rl.close()
});