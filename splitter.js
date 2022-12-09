
// This program will take two words as input and output the similarity between them on a scale from 1 to 10.

let userInput = 'Niger'
let controlWord = 'Niger River'

// Split both words into arrays of characters
let userInputSplit = userInput.split('');
let controlWordSplit = controlWord.split('');

// Initialize a score variable and set it to 0
let score = 0;

// Loop through each character in the user input
for (let i = 0; i < userInputSplit.length; i++) {
  // Check if the character at the same index in the control word is the same as the user input
  if (userInputSplit[i] === controlWordSplit[i]) {
    // If so, add 1 to the score
    score += 1;
  }
}

// Calculate the similarity on a scale from 1 to 10
let similarity = Math.round((score / userInputSplit.length) * 10);

// Output the similarity
console.log(`The similarity is ${similarity} on a scale from 1 to 10.`);