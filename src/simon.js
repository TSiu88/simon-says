// Business end logic
//use "export function Object(parameter)"
var colorArray = [];

export function randomColor() {
  var colors = ["blue", "red", "yellow", "green"];
  var randomNum = Math.floor(Math.random()* colors.length);
  console.log(randomNum);
  colorArray.push(colors[randomNum]);
  console.log(colorArray);
  return colors[randomNum];

}

export function flashColor(){
  for (var i = 0; i < colorArray.length; i++){
    var currColor = colorArray[i];
    setInterval(showColor(currColor), 2000);
  }
}

function showColor(color){
  if(color === "blue"){
    //show picture of blue color?
    return "blue";
  }
  //do for rest of colors
}
