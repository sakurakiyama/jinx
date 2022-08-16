// Declare three variables 1. contains all the easy letters 2. contains all the vowels 3. contains the hard letters
const easyLetters = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'W', 'Y'];
const vowels = ['A', 'E', 'I', 'O', 'U'];
const hardLetters = ['Z', 'X', 'Q', 'V'];

// Output will store 6 letters from easyLetters, 2 from vowels and 2 from hardLetters 
let output = [];

// jumbleLetters takes in an array and and a number and returns num number of letters at random from the passed in array 
function jumbleLetters(array, num) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  output = output.concat(shuffled.slice(0, num))
}

// Invoking jumbleLetters
jumbleLetters(easyLetters, 5)
jumbleLetters(vowels, 3)
jumbleLetters(hardLetters, 2)