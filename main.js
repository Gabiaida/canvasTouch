canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

function limpar(){
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

var largura=screen.width;
var altura=screen.height;
var Nlargura= largura-70;
var Naltura= altura-300;

if(largura<992){
    document.getElementById("myCanvas").width= Nlargura;
    document.getElementById("myCanvas").height=Naltura;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",myTouchStart);
function myTouchStart(e){
   lastpositionX=e.touches[0].clientX- canvas.offsetLeft;
   lastpositionY=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",myTouchMove);
function myTouchMove(e){
    positionX=e.touches[0].clientX- canvas.offsetLeft;
    positionY=e.touches[0].clientY- canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=red;
    ctx.lineWidth=2;
    ctx.moveTo(lastpositionX, lastpositionY);
    ctx.lineTo(positionX, positionY);
    ctx.stroke();
    lastpositionX=positionX;
    lastpositionY=positionY;
}
