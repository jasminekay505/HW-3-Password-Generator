// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create strings with character options
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";



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
  //Ask for password length
  var passwordLength = prompt("How many characters do you want in your new password? Choose between 8 and 128.");
  
  //Validate input
  if(!passwordLength) {
    alert("You must choose a how many characters you want in your new password!");

  //Validate length input  
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128.");

  } else {

    //Create blank password to be filled up with characters
    var password = "";
    //Create blank string to fill with user choices for characters
    var userChoices = "";

    //Ask if user wants Lower case letters
    var wantLower = confirm("Do you want lower case characters in your password?");

    //Add upper case characters to userChoices
    if (wantLower) {
      userChoices = userChoices + lowerLetters;
    }

    //Ask for password composition
    //Ask if user wants Upper case letters
    var wantUpper = confirm("Do you want upper case characters in your password?");

    //Add upper case characters to userChoices
    if (wantUpper) {
      userChoices = userChoices + upperLetters;
    }

    //Ask if user wants numbers
    var wantNum = confirm("Do you want numbers in your password?");

    //Add numbers to userChoices
    if(wantNum) {
      userChoices = userChoices + num;
    }

    //Ask if user wants symbols
    var wantSymbol = confirm("Do you want special characters in your password (!@#$% etc.");

    //Add symbols to userChoices
    if (wantSymbol) {
      userChoices = userChoices + symbol;
    }

    //Validate input, if user chooses no characters
    if(!wantUpper && !wantLower && !wantNum && !wantSymbol) {
      userChoices = alert("You must choose at least one character for your password!");
    }
  
    //For loop to create randomly generated password
    for (var i = 0; i < passwordLength; i ++) {
      var character = userChoices[Math.floor(Math.random() * userChoices.length)];
      //Add character each loop to password
      password += character;
    }
  }
  //Function returns password to be printed in writePassword function 
  return password;
  }
 