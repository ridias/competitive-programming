#!/usr/bin/env bash

# para dar permisos -> sudo chmod ug+x armstrong-numbers.sh
# para testear con argumento -> ./armstrong-numbers.sh 24
# para testear sin argumento -> ./armstrong-numbers.sh

num=$1
sum=0
length=${#num}
while [[ $num -gt 0 ]]
do
    value=($((num % 10))**"$length")
    sum=$((sum + value))
    num=$((num/10))
done

if [[ "$sum" == "$1" ]]; then 
    echo true
else
    echo false
fi
