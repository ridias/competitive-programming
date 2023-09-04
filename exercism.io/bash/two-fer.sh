#!/usr/bin/env bash

# para dar permisos -> sudo chmod ug+x two-fer.sh
# para testear con argumento -> ./two-fer.sh Alice
# para testear sin argumento -> ./two-fer.sh
if [ "$1" == "" ] ; then
    echo "One for you, one for me."
else
    echo "One for $1, one for me."
fi

# otra manera
name=$1
if [ "$name" == "" ] ; then
    name="you"
fi

echo "One for $name, one for me."