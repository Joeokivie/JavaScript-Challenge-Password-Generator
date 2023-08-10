// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberchoice=[1,2,3,4]
var lowercase= ["a","b","c"]
var uppercase= ["A","B","C"]
var specialcharacter= ["!","#", "@"]
function generatePassword(){
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
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


    
