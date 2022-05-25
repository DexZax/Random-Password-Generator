// Assignment code here
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]"];

var passwordText = document.querySelector("#password");

function generatePassword() {
  passwordText.value = "";
  //prompt to ask how many characters in the password
  var passwordLength = window.prompt("how many characters would you like in your password? please note, you must have more than 8 and less than 128.");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must have more than 8 characters and less than 128. Please choose a different number.");
    return generatePassword();
  }
  
  var lowercaseCharacters = window.confirm("Would you like to include lowercase characters in your password?");
  var uppercaseCharacters = window.confirm("Would you like to include uppercase characters in your password?");
  var numberCharacters = window.confirm("Would you like your password to have numbers in it?");
  var specialCharacters = window.confirm("Would you like to include special characters in your password?");

  var characterSet = [];
  var generation = [];

  if (!lowercaseCharacters && !uppercaseCharacters && !numberCharacters && !specialCharacters) {
    window.alert("you must select atleat one character type.");
    return generatePassword();
  }
  if (lowercaseCharacters) {
    generation = generation.concat(lowercase);
  }
  if (uppercaseCharacters) {
    generation = generation.concat(uppercase);
  }
  if (numberCharacters) {
    generation = generation.concat(number);
  }
  if (specialCharacters) {
    generation = generation.concat(special);
  }
  for (var i = 0; i < passwordLength; i++) {
    characterSet.push(generation[Math.floor(Math.random() * generation.length)]);
  }
  return characterSet.join('');
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
