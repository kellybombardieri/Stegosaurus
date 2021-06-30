// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  console.log(password)
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
window.addEventListener('load', generatePassword);

function generatePassword() {
  // prompt length
  var length = prompt("How many characters would you like your password to be?");
  // check length input validation
  while (length < 8 || length > 128) {
    length = prompt("Password must be between 8-128 characters. How many characters would you like your password to be?");
  }
  // prompt lowercase
  // prompt the rest
  var uppercase = confirm("Would you like to use uppercase letters?");
  var lowercase = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");
  // validation of selections
  while (!uppercase && !lowercase && !numbers && !symbols) {
    alert("You must select at least one character type!");

    var uppercase = confirm("Would you like to use uppercase letters?");
    var lowercase = confirm("Would you like to use lowercase letters?");
    var numbers = confirm("Would you like to use numbers?");
    var symbols = confirm("Would you like to use special characters?");
  }

 

  // based on responses generate password
  // create an empty string
  var password1 = ''

  if (uppercase) {
    password1 += getUpperCase();
  }

  if (lowercase) {
    password1 += getlowerCase();
  }

  if (numbers) {
    password1 += getNumber();
  } 
  
  if (symbols) {
    password1 += getSymbol();
  } 

  for (var i = 0; i < password.length; i++) {
    password += passwordText;
  }

  return password; 

}

  console.log('password:::', password)


  // Finish required

  // remaining = length - password current length

  // Figure out how to fill the string remaining values



// creating info in function

  function getlowerCase() {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }

  function getUpperCase() {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upperCase[Math.floor(Math.random() * upperCase.length)];
  }

  function getNumber() {
    var numbers = "1234567890";
    return numbers[Math.floor(Math.random() * numbers.length)];
  }

  function getSymbol() {
    var symbols = "!@#$%^&*()<>?:;'.,/~{}";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }