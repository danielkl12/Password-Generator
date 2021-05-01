var valid1;
var valid2;
var valid3;
var valid4;
var low;
var up;
var num;
var symbol;
var uppers = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var numb = "0123456789";
var special = "!@#$%^&*()_-=+[]{}";
var passPossible = '';
// prompts
function inputCriteria() {
    //tell user to choose a character length
    
var charNumber = parseInt(
            prompt("Please choose password between 8 and 128 characters."));

    if (charNumber >= 8 && charNumber <= 128) {
    console.log(charNumber + " is accepted.");


    } else {
         alert("Unacceptable length. Please choose length between 8 and 128 characters");
         return inputCriteria();
    }
    
;

    var passStore = [];

    //Asks if user would like to use a variety of characters through a series of confirms (Both variable and validator stored as boolean)
    function charSelect() {
        var lowersVal = function () {
            low = confirm("Would you like to use lowercase characters?");
           
        }
        lowersVal();
        while (valid1 === false) {
            lowersVal();
        }
        var uppersVal = function () {
            up = confirm("Would you like to use uppercase characters?");
            
        }
        uppersVal();
        while (valid2 === false) {
            uppersVal();
        }
        var numbVal = function () {
            num = confirm("Would you like to use numbers?");
            
        }
        numbVal();
        while (valid3 === false) {
            numbVal();
        }
        var symbVal = function () {
            special = confirm("Would you like to use special characters?");
            
        }
        symbVal();
        while (valid4 === false) {
            symbVal();
        }
    }
    charSelect();
    //Validate that at least one character type was chosen
    if (low === true || up === true || num === true || special === true) {
        alert("Let's get you your password!");
    } else {
        alert("Please select at least one option for password criteria.");
        charSelect();
    }
    if (low === true) {
        passPossible = passPossible + lowers;
    }
    if (up === true) {
        passPossible = passPossible + uppers;
    }
    if (num === true) {
        passPossible = passPossible + numb;
    }
    if (symbol === true) {
        passPossible = passPossible + sym;
    }
    for (i = 0; i < charNumber; i++) {
        var randomIndex = Math.floor(Math.random() * passPossible.length);
        var randomCharacter = passPossible[randomIndex];
        passStore = passStore + randomCharacter;
    }
    return passStore;
}
// Write password to the #password input //
function writePassword() {
    var password = inputCriteria();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// Add event listener to generate button //
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


