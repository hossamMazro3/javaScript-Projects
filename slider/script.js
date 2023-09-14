var myImg = document.getElementById("myImg") ;
var btnPrv = document.getElementById("prev");
var btnNxt = document.getElementById("next");
var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");
var counter = 0;

btnNxt.onclick = ()=>{
  myImg.setAttribute("src",`./img/${(++counter)%4}.png`);
}

btnPrv.onclick = ()=>{
  myImg.setAttribute("src",`./img/${(--counter)%4}.png`);
}

var intrval;

btnStart.onclick = function () {
  intrval = setInterval(() => {
    myImg.setAttribute("src",`./img/${(++counter)%4}.png`);
  }, 1000);
}
btnStop.onclick = function () {
  clearInterval(intrval);
}
