// User Interface logic
// use "import {Object} from ./businesslogicfilename';"
import './styles.css';
import {randomColor} from './simon';
import {flashColor} from './simon';

$(document).ready(function(){
  
  $("#startButton").click(function(event){
    event.preventDefault();

    $("#gameOutput").append(randomColor());
    flashColor();
    // then change display

  });

  var playerArray = [];

  $("#blueButton").click(function(event){
    event.preventDefault();
    playerArray.push("blue");
    console.log(playerArray);
    $("#playerOutput").text(playerArray);
  });

  $("#redButton").click(function(event){
    event.preventDefault();
    playerArray.push("red");
    console.log(playerArray);
    $("#playerOutput").text(playerArray);
  });

  $("#yellowButton").click(function(event){
    event.preventDefault();
    playerArray.push("yellow");
    console.log(playerArray);
    $("#playerOutput").text(playerArray);
  });

  $("#greenButton").click(function(event){
    event.preventDefault();
    playerArray.push("green");
    console.log(playerArray);
    $("#playerOutput").text(playerArray);
  });

  $("#submitButton").click(function(event){
    event.preventDefault();
    // take playerArray and compare to colorArray
    // if correct, continue game
    // else game over
    // reset playerArray
  });

  $("#playAgain").click(function(event){
    event.preventDefault();
    //reset color array and player array
  });

});