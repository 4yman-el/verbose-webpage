#!/bin/bash

# Add note to main.js
printf "// This file is generated AUTOMATICALLY\n\n" > js-min/main.js

for file in js-src/*.js js-src/**/*.js; do
    cat $file >> js-min/main.js
done
