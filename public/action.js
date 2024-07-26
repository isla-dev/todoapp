document.querySelector("h1").textContent="Still work on it";

///-- DATE CODE --------------------------------------------------->

const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var today= new Date();

document.querySelector(".today").textContent=day[today.getDay()];
document.querySelector(".date").textContent=today.getDate()+" "+month[today.getMonth()]+" "+today.getFullYear();

// document.getElementById("whatsapp").addEventListener("click",()=>{
//     navigator.clipboard.writeText("+213668521973");
//     alert("+213668521973 copied to clipboard")
// })