// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "0123456789"
var symbol = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Create generatePassword Function
function generatePassword() {

}