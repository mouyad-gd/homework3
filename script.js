// Define var
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArraay = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var specialCharArray = ['\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', \'u003C', \'u003D', \'u003E', \'u003F', \'u0040', \'u005B', \'u005C', \'u005D', \'u005E', \'u005F', \'u0060', \'u007B', \'u007C', \'u007D', \'u007E']
var specialChars = "!#$%&'()*+,-.:;<=>?@[]^_`{|}~";
var specialCharArray = specialChars.split("");
var finalArray = new Array();
var userName = prompt("What is your name?");
// welcome message with the user name
alert("Welcome to our page" + " " + userName + "!");
// Alert the user regarding next step
alert("Alert!" + " " + userName + " You need to Click OK and follow instructions to generate new password");
//instruction message 
alert("Start with selecting number between 8 and 128");
//fuction of alert uncheck Uppercase checkbox
function checkboxFunction1() {
  var upperBox = document.getElementById("upperCase");
  if (upperBox.checked) {
    alert("Confirmation message: Uppercase letters will be included");
  }
  else {
    alert("Warning: No Uppercase letters will be included");
  }
}
//fuction of alert uncheck Lowercase checkbox
function checkboxFunction2() {
  var lowerBox = document.getElementById("lowerCase");
  if (lowerBox.checked) {
    alert("Confirmation message: Lowercase letters will be included");
  }
  else {
    alert("Warning: No Lowercase letters will be included");
  }
}
//fuction of alert uncheck Nmbers checkbox
function checkboxFunction3() {
  var numBox = document.getElementById("numbers");
  if (numBox.checked) {
    alert("Warning: Numbers will be included");
  }
  else {
    alert("Confirmation message: No Numbers will be included");
  }
}
//fuction of alert uncheck Special characters checkbox
function checkboxFunction4() {
  var specBox = document.getElementById("specialChar");
  if (specBox.checked) {
    alert("Confirmation message: Special characters will be included");
  }
  else {
    alert("Warning: No special characters will be included");
  }
}
// function to check the boxes and generate password 
function generate_password(length) {
  var finalArray = new Array();
  length = document.getElementById("length").value;
  if (length > 128 || length < 8) {
    alert("Please select number between 8 and 128");
  }
  else {
    length = parseInt(length);
    let password = [];
    var upperBox = document.getElementById("upperCase");
    if (upperBox.checked) {
      for (var i = 0; i < upperCaseArray.length; i++) {
        finalArray.push(upperCaseArray[i]);
      }
    }
    var lowerBox = document.getElementById("lowerCase");
    if (lowerBox.checked) {
      for (i = 0; i < lowerCaseArraay.length; i++) {
        finalArray.push(lowerCaseArraay[i]);
      }
    }
    var numBox = document.getElementById("numbers");
    if (numBox.checked) {
      for (i = 0; i < numbersArray.length; i++) {
        finalArray.push(numbersArray[i]);
      }
    }
    var specBox = document.getElementById("specialChar");
    if (specBox.checked) {
      for (i = 0; i < specialCharArray.length; i++) {
        finalArray.push(specialCharArray[i]);
      }
    }
    for (i = 0; i < length; i++) {
      if (i != length) {
        let chosen_letter = finalArray[Math.floor(Math.random() * finalArray.length)];
        password.push(chosen_letter);
      }
    }
    return password.join("");
  }
}
// Add event listener to generate button & Write password to the #password input
document.getElementById("generate").addEventListener("click", function () {
  let password = generate_password(document.getElementById("length").value);
  document.getElementById("password").innerHTML = password;
});