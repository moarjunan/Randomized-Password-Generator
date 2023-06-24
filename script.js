// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = {
  Uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  Lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  Number: ["0","1","2","3","4","5","6","7","8","9"],
  Special: ["!","","#","$","%","&","'","(", "/",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
};



function generatePassword() {

  var empty = ""

  var num = window.prompt("Enter password length of atleast 8 characters and no more than 128 characters.");

  var lowercase = window.confirm("Should the password contain lowercase letters?");
    if (lowercase) {
    var empty = empty += characters.Lowercase
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

  for (let i = 0; i < num; i++) {
     empty[Math.floor(Math.random() * empty.length)]
     }
  return empty;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", (writePassword));



