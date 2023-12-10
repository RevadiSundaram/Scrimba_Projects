let homeValue = document.getElementById("homevalue");
let guestValue = document.getElementById("guestvalue");

let homeOne = document.getElementById("hplusone");
let homeTwo = document.getElementById("hplustwo");
let homeThree = document.getElementById("hplusthree");

let guestOne = document.getElementById("gplusone");
let guestTwo = document.getElementById("gplustwo");
let guestThree = document.getElementById("gplusthree");

const newGameBtn = document.getElementById("new-game-btn");

let hcount = 0;
let gcount = 0;

homeOne.addEventListener("click",function(){
  hcount = hcount+1
homeValue.innerText = hcount
 
})

homeTwo.addEventListener("click",function(){
  hcount = hcount+2
homeValue.innerText = hcount
 
})

homeThree.addEventListener("click",function(){
  hcount = hcount+3
homeValue.innerText = hcount
 
})

guestOne.addEventListener("click",function(){
    gcount = gcount+1
    guestValue.innerText = gcount
 
})

guestTwo.addEventListener("click",function(){
    gcount = gcount+2
    guestValue.innerText = gcount
 
})

guestThree.addEventListener("click",function(){
    gcount = gcount+3
    guestValue.innerText = gcount
 
})

newGameBtn.addEventListener('click',function(){
    homeValue.innerText = 0
    guestValue.innerText = 0
})