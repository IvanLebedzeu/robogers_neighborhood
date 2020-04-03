var digitsArray = [];
var numArray = [];
var letters = /[A-Za-z]/;
function convertNumbers(number) {

  if (number < 0 || (number.toString().match(letters))) {
    alert("Please enter a valid number")
  }
  for (var i = 0; i <= number; i++){

   
    digitsArray.push(i);
    console.log(digitsArray);

   
      
     var index = digitsArray.indexOf(3);     
     digitsArray[index] = "Won't you be my neighbor?";
     var index1 = digitsArray.indexOf(2);
     digitsArray[index1] = "Boop";
     var index2 = digitsArray.indexOf(1);
     digitsArray[index2] = "Beep";
    
     
  }  return digitsArray;
}
  

  
 





$(document).ready(function(){

  $("#user-input").submit(function(event){
    event.preventDefault();
    $("#restartButton").click(function() {
      location.reload();
    });
    

    var userInput = parseInt($("input#number").val());
    console.log(userInput);
    var number = ("" + userInput).split("");

    convertNumbers(number);


    $("#result").text(digitsArray);

  });
});