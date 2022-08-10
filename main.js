canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");



function circle(mouseX, mouseY){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
    ctx.stroke();
}
canvas.addEventListener("mousedown",myMousedown);
function myMousedown(e){
    mouseEvent="mousedown";
    color=document.getElementById("cor").value;
    larg= document.getElementById("largura").value;
}

canvas.addEventListener("mouseleave",myMouseleave);
function myMouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup",myMouseup);
function myMouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mousemove",myMousemove);
function myMousemove(e){
    positionX=e.clientX- canvas.offsetLeft;
    positionY=e.clientY- canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=larg;
        ctx.moveTo(lastpositionX, lastpositionY);
        ctx.lineTo(positionX, positionY);
        ctx.stroke();
    }
    lastpositionX=positionX;
    lastpositionY=positionY;
}

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