#!/usr/bin/env bash

# para dar permisos -> sudo chmod ug+x error-handling.sh
# para testear con argumentos -> ./error-handling.sh Alice Bob
# para testear sin argumento -> ./error-handling.sh

len=$#
if [[ "$len" -gt 1 ]] || [[ "$len" -eq 0 ]]; then 
    printf "Usage: error_handling.sh <person>" 
    exit 1
else
    echo "Hello, $1"
fi