let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[A-Z]/gi; 
let result = quoteSample.match(alphabetRegex); 

console.log(result)