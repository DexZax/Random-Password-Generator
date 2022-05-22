// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABDCEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%&*-/<>+_[]~";

var passwordText = document.querySelector("#password");

function generatePassword() {
  passwordText.value = "";
  //prompt to ask how many characters in the password
  var passwordLength = window.prompt("how many characters would you like in your password? please note, you must have more than 8 and less than 128.");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must have more than 8 characters and less than 128. Please choose a different number.");
    generatePassword();
  }
  
  var lowercaseCharacters = window.confirm("Would you like to include lowercase characters in your password?");
  var uppercaseCharacters = window.confirm("Would you like to include uppercase characters in your password?");
  var numberCharacters = window.confirm("Would you like your password to have numbers in it?");
  var specialCharacters = window.confirm("Would you like to include special characters in your password?");

  var characterSet = "";
  var generation = "";

  if (!lowercaseCharacters && !uppercaseCharacters && !numberCharacters && !specialCharacters) {
    window.alert("you must select atleat one character type.");
    generatePassword();
  }
  if (lowercaseCharacters) {
    characterSet = characterSet.concat(lowercase);
  }
  if (uppercaseCharacters) {
    characterSet = characterSet.concat(uppercase);
  }
  if (numberCharacters) {
    characterSet = characterSet.concat(number);
  }
  if (specialCharacters) {
    characterSet = characterSet.concat(special);
  }
  for (var i = 0; i < passwordLength; i++) {
    generation += characterSet[Math.floor(math.random() * passwordLength)];
  }
  return generation;

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
