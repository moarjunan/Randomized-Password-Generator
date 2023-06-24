// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = {
  Uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  Lowercase: 'abcdefghijklmnopqrstuvwxyz',
  Number: '0123456789',
  Special: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
};



function generatePassword() {
  
  var empty = ""

  var num = window.prompt("Enter password length of atleast 8 characters and no more than 128 characters.");

  var lowercase = window.confirm("Should the password contain lowercase letters?");
    if (lowercase) {
    var empty = empty += characters.Lowercase;
    }

  var uppercase = window.confirm("Should the password contain uppercase letters?");
    if (uppercase) {
    var empty = empty += characters.Uppercase;
    };

  var number = window.confirm("Should the password contain numeric characters?");
    if (number) {
    var empty = empty += characters.Number;
    };

  var special = window.confirm("Should the password contain special characters?");
    if (special) {
    var empty = empty += characters.Special;
    };


  var filled = "";
  for (let i = 0; i < num; i++) {
    filled += empty[Math.floor(Math.random() * empty.length)]
     }
  return filled;
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", (writePassword));



