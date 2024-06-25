#!/bin/bash

# Ensure all files in js-src end with a newline
for file in js-src/*; do
    # Check if the last character is not a newline
    if [ "$(tail -c 1 "$file")" != "" ]; then
        echo >> "$file"
    fi
done
