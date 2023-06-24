// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = {
  Uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  Lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  Number: ["0","1","2","3","4","5","6","7","8","9"],
  Special: ["!","","#","$","%","&","'","(", "/",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
};

function generatePassword() {

window.prompt("Enter password length of atleast 8 characters and no more than 128 characters.")
window.prompt("Should the password contain lowercase letters?")
window.prompt("Should the password contain uppercase letters?")
window.prompt("Should the password contain numeric characters?")
window.prompt("Should the password contain special characters?")


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", (writePassword));



