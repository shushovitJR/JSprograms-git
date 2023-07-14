let x=0;
document.getElementById("prevbtn").onclick = function(){
    x--;
    document.getElementById("number0").innerHTML = x;
}
document.getElementById("resetbtn").onclick = function(){
    x=0;
    document.getElementById("number0").innerHTML = x;
}
document.getElementById("nextbtn").onclick = function(){
    x++;
    document.getElementById("number0").innerHTML = x;
}
let rnum;
document.getElementById("randombtn").onclick = function(){
    rnum = Math.floor(Math.random()*(100+1) + 0);
    document.getElementById("randomnumber").innerHTML = rnum;
}