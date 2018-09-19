var button1 = document.querySelector("#p1");
var button2 = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var box = document.querySelector("input");
var playingTo = document.querySelector("p span");
var p1 = 0;
var p2 = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScore = 5;
var gameOver = false;

button1.addEventListener("click", function(){
  if(!gameOver){
  p1++;
  if(p1 === winningScore){
  gameOver = true;
  p1Display.classList.add("winner");
  }
  p1Display.textContent = p1;
  }
});

button2.addEventListener("click", function(){
  if(!gameOver){
  p2++;
  }
  if(p2 === winningScore){
  gameOver = true; 
  p2Display.classList.add("winner");
  }
  p2Display.textContent = p2;
});

resetButton.addEventListener("click", function(){
  reset();
});

box.addEventListener("change", function(){
  playingTo.textContent = box.value;
  winningScore = Number(box.value);
  reset();
});

function reset(){
  p1 = 0;
  p2 = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  gameOver = false;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
}
