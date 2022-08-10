canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

function limpar(){
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

var largura=screen.width;
var altura=screen.height;

if(largura<992){
    document.getElementById("myCanvas").width= largura-70;
    document.getElementById("myCanvas").height=altura-300;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",myTouchStart);
function myTouchStart(e){
   lastpositionX=e.touches[0].clientX- canvas.offsetLeft;
   lastpositionY=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",myTouchMove);
function myTouchMove(e){
    positionX=e.clientX- canvas.offsetLeft;
    positionY=e.clientY- canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=larg;
    ctx.moveTo(lastpositionX, lastpositionY);
    ctx.lineTo(positionX, positionY);
    ctx.stroke();
    lastpositionX=positionX;
    lastpositionY=positionY;
}