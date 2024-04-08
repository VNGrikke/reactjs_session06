let inputString: string = "hello world"; 

let uniqueCharacters: Set<string> = new Set(inputString);

let resultString: string = Array.from(uniqueCharacters).join('');

console.log(resultString);
