var digitsArray = [];
var numArray = [];
function convertNumbers(number) {
  for (var i = 0; i <= number; i++){

    //var str = i.toString();
    
    //console.log(i);
    digitsArray.push(i);
    console.log(digitsArray);

    for (var j = 0; j <= digitsArray.length; j++) {
      //j = numArray.indexOf(digitsArray);
      if(digitsArray.includes("3")){
        digitsArray[j] = "Won't you be my neighbor?";
      }
    }
      
     
  }  return digitsArray;
}
  

  
 





$(document).ready(function(){

  $("#user-input").submit(function(event){
    event.preventDefault();
    

    var userInput = parseInt($("input#number").val());
    console.log(userInput);
    var number = ("" + userInput).split("");

    convertNumbers(number);


    $("#result").text(digitsArray);

  });
});