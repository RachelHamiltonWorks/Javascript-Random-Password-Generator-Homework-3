/* This doesn't quite work, but hopefully you can see where I was going here and I can work with you all and a tutor
to figure out how to think differently/better about the next assignment*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var passwordLength = prompt("Enter desired password length. (Between 8 and 128 characters)");
// if (passwordLength) == <= 8 || >= 128; 
// alert ("Password must be between 8 and 128 characters.") 
console.log (passwordLength);
var useLowercase = confirm("Do you want to use lowercase characters?"); 
console.log (useLowercase);  
var useUppercase = confirm("Do you want to use uppercase characters?"); 
console.log (useUppercase);  
var useNumbers = confirm("Do you want to use numbers?"); 
console.log (useNumbers);
var useSpecialCharacters = confirm("Do you want to use special characters?"); 
console.log (useSpecialCharacters);

  var password = generatePassword();
                /*nested generatePassword function first pulls random items from arrays, stores results as variables,
                 and is run (passwordLength - from user input) number of times via a loop -- need to create loop*/
      if (useLowercase) == true { // then pull random item from array of lowercase characters//
      var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var randomLowerCase = lowercaseArray[Math.floor(Math.random()*lowercaseArray.length)];
      } else  {""};
      
      if useUppercase == true  // pull random item from array of uppercase lowercase characters//
      var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
      var randomUpperCase = uppercaseArray[Math.floor(Math.random()*uppercaseArray.length)];
      else ""

      if useNumbers === true  // pull random item from array of numbers//
      var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      var randomNumber = numberArray[Math.floor(Math.random()*numberArray.length)];
      else ""

      if useSpecialCharacter == true  // pull random item from array of special characters//
      var specialCharacterArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
      var randomSpecialCharacter = specialCharacterArray[Math.floor(Math.random()*specialCharacterArray.length)];
      else ""

}

var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
