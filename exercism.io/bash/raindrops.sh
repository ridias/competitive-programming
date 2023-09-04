#!/usr/bin/env bash

# para dar permisos -> sudo chmod ug+x raindrops.sh
# para testear con argumento -> ./raindrops.sh 30
# para testear sin argumento -> ./raindrops.sh

result=""
val=$1

if [[ $((val % 3)) -eq 0 ]]; then 
    result+="Pling"
fi

if [[ $((val % 5)) -eq 0 ]]; then
    result+="Plang"
fi

if [[ $((val % 7)) -eq 0 ]]; then
    result+="Plong"
fi

length=${#result}
if [[ $length -gt 0 ]]; then 
    echo $result
else 
    echo "$1"
fi

