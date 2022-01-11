var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

ctx.beginPath();
ctx.rect(20, 40, 53, 10);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 1;
var dy = -1;

var ballRadius = 8;

var collideSound;

collideSound = new Audio("");

function draw(){

    if(y + dy > canvas.height - ballRadius || y + dy < ballRadius)
    {
        dy = -dy;
        collideSound.play();
    }

    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius)
    {
        collideSound.play();
        dx = -dx;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    x += dx;
    y += dy;
}

setInterval(draw, 10)