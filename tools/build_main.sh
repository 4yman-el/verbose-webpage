#!/bin/bash

rm js-min/main.js
touch js-min/main.js

for file in js-src/*; do
    cat $file >> js-min/main.js
done
