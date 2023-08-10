// Assignment Code
var generateBtn = document.querySelector("#generate")
var numberchoice=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10];
var lowercase= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialcharacter= ['@', '%', '+',  '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '_',];

//a password-generating function and null strings for input from users.
function generatePassword() {
    var allcharacters = "";
    var userPassword = "";

    var finalpasswordchoices= []
    var passwordlength = prompt("please make sure your password is at least 8 characters and no more than 128 characters")
    console.log (passwordlength)
    if(passwordlength>8&&passwordlength<128){
        console.log("correct")
     var numberconfirm= confirm("would you like numbers for your password")
     console.log (numberconfirm)
     var lowercaseconfirm=confirm("would you like lowercase letters for your password")
     var uppercaseconfirm=confirm ("would you like uppercase letters for your password")
     var specialcharacterconfirm=confirm ("would you like specialcharacter for your password")
     if(numberconfirm===true){
        finalpasswordchoices=finalpasswordchoices.concat(numberchoice)


     }
      if(lowercaseconfirm===true){
        finalpasswordchoices=finalpasswordchoices.concat(lowercase)
        
     }
     if(uppercaseconfirm===true){
        finalpasswordchoices=finalpasswordchoices.concat(uppercase)
     }
     if(specialcharacterconfirm===true){
        finalpasswordchoices=finalpasswordchoices.concat(specialcharacter)
        
     }
     console.log(finalpasswordchoices)
    } else{
        console.log("false")
    }
    for (var i=0;i<passwordlength;i++) {
        var randomindex= Math.floor(Math.random()*finalpasswordchoices.length)
        
        userPassword+=(finalpasswordchoices[randomindex].toString())
        console.log(finalpasswordchoices[randomindex])

    
    } return userPassword
    console.log(userPassword)
}
    

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


    
