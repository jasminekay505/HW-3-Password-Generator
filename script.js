// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var symbol = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var userChoices = ""

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
  //Ask for user input
  //Ask for password length
  var passwordLength = prompt("How many characters do you want in your new password? Choose between 8 and 128.");
  //Validate input
  if(!passwordLength) {
    alert("You must choose a how many characters you want in your new password!");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLenght = prompt = ("You must choose between 8 and 128.");
  } else {
    //Ask for password composition
    var wantUpper = confirm("Do you want upper case characters in your password?");
    //Add upper case characters into array
    if (wantUpper) {
      userChoices = userChoices + upperLetters;
    }
    var wantLower = confirm("Do you want lower case characters in your password?");
    //Add upper case characters into array
    if (wantLower) {
      userChoices = userChoices + lowerLetters;
    }
    var wantNum = confirm("Do you want numbers in your password?")
    //Add numbers into array
    if(wantNum) {
      userChoices = userChoices + num;
    }
    var wantSymbol = confirm("Do you want special characters in your password (!@#$% etc.");
    //Add symbols into array
    if (wantSymbol) {
      userChoices = userChoices + symbol;
    }
  }

  }
 