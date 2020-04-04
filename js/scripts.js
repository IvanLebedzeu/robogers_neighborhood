var digitsArray = [];
//var finalArray = [];
//var numArray = [];
var letters = /[A-Za-z]/;

function convertNumbers(number) {

  if (number < 0 || (number.toString().match(letters))) {
    alert("Please enter a valid number")
  }
  for (var i = 0; i <= number; i++){

   
    digitsArray.push(i.toString());
    console.log(digitsArray);

    for (var j = 0; j < digitsArray.length; j++){
      if (digitsArray[j].includes("3")){
        digitsArray[j] = "Won't you be my neighbor?";
      } else if (digitsArray[j].includes("2")){
        digitsArray[j] = "Boop";
      } else if (digitsArray[j].includes("1")){
        digitsArray[j] = "Beep";
      }
    }


   
      
    //  var index = digitsArray.indexOf(3);     
    //  digitsArray[index] = "Won't you be my neighbor?";
    //  var index1 = digitsArray.indexOf(2);
    //  digitsArray[index1] = "Boop";
    //  var index2 = digitsArray.indexOf(1);
    //  digitsArray[index2] = "Beep";
    //  console.log(digitsArray);

      // for(var j = 0; j< digitsArray.length; j++){
      //   if (digitsArray[j].length() > 2 && digitsArray.indexOf(3)){
      //     digitsArray[j] = "Won't you be my neighbor?";
      //   }
      // }



    //  for (var index; index < digitsArray.length; index++) {
    //    if (index = digitsArray.indexOf(3)){
    //     digitsArray[index] = "Won't you be my neighbor?";
    //    } else if (index = digitsArray.indexOf(2)) {
    //     digitsArray[index] = "Boop";
    //    } else if (index = digitsArray.indexOf(1)) {
    //      digitsArray[index] = "Beep";
    //    }
    //  } return digitsArray;

   
    
     
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
    //var number = ("" + userInput).split(""); // - previos

    //convertNumbers(number); // - previos
    convertNumbers(userInput);


    $("#result").text(digitsArray);

  });
});