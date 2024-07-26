///-- ADVICE ------------------------------------------------------> 

const work ="let's work hard today !";       //for other days
const rest ="it's time to get some rest";   //for friday
var advice ="";
var pic = "";

if(today.getDay()==5) {
    advice = rest;
    pic = "rest";
}
else {
    advice = work;
    pic = "work";
}

document.querySelector(".picture > #image").setAttribute("src","pictures/"+pic+"-blue.png");
document.querySelector(".picture > .advice").textContent = advice;