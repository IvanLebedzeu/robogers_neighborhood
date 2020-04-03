function convertNumbers(number) {
  for (var i = 0; i <= number; i++){
    console.log(i);
  }
}



$(document).ready(function(){

  $("#user-input").submit(function(event){
    event.preventDefault();
    

    var userInput = parseInt($("input#number").val());
    //var userInputArray = userInput.split(" ");

    // console.log(userInput);
    // convertToRoman(userInput);
    console.log(userInput);
    //convertToRoman(userInput);
    //console.log(numRoman);
    var digits = ("" + userInput).split("");

    convertNumbers(digits);
    

    $("#result").text(digits);

  });
});