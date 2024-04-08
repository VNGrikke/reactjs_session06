"use strict";
let inputString = "hello world";
let uniqueCharacters = new Set(inputString);
let resultString = Array.from(uniqueCharacters).join('');
console.log(resultString);
