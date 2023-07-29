var screen = document.getElementById("myScreen");
let currentexpression = '';

function toggleScreen() {
    var screen_div = document.getElementById("topSec");
    var onof = document.getElementById("acBtn");
    // var screen = document.getElementById("myScreen");
    if (screen.style.display == "none"){
        screen.style.display = "flex";
        screen_div.style.background = "linear-gradient(90deg, rgba(2,4,4,1) 32%, rgba(11,9,80,1) 100%, rgba(21,20,133,1) 100%, rgba(35,35,206,0.9109907390690651) 100%, rgba(0,212,255,1) 100%)";
        screen.innerHTML = "Click OFF to turn off";
        onof.innerHTML = "OFF";
    }
    else
    {
        screen_div.style.background = "none";
        screen.style.display = "none";
        onof.innerHTML = "ON";
    }
}
function appendNumber(n){
    // var screen = document.getElementById("myScreen");
    currentexpression += n;
    screen.innerHTML = currentexpression;
    screen.value = currentexpression;
}
function appendOperator(o){
    currentexpression += o;
    screen.innerHTML = currentexpression;
    screen.value = currentexpression;
}
function appendDot(d){
    currentexpression += d;
    screen.innerHTML = currentexpression;
    screen.value = currentexpression;
}
function clearScreen(){
    currentexpression = currentexpression.slice(0,-1);
    screen.innerHTML = currentexpression;
    screen.value = currentexpression;
}
function calculate(){
    try{
        screen.value = eval(currentexpression);
        screen.innerHTML = screen.value;
    }
    catch (error) {
        screen.innerHTML = "ERROR";
    }
    currentexpression = '';
}