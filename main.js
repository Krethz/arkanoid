import { DrawScore } from "./drawScore.js";
import { DrawLifes } from "./drawLifes.js";
import { DrawBall } from "./drawBall.js";
import { DrawPaddle } from "./drawPaddle.js";
import { DrawBricks } from "./drawBricks.js";

var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var score = 5;
var lives = 3;
var gameStatus = 1;

///BALL SETTINGS
var x = canvas.width/2;
var y = canvas.height-30;
var ballRadius = 8;

var dx = 2;
var dy = -2;

///PADDLE SETTINGS
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

///BRICKS SETTINGS

var brickRowCount = 3;
var brickColumnCount = 7;
var brickWidth = 70;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 23;
var brickOffsetLeft = 25;

var bricks = [];

document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }
}

for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
        if (bricks[c][r].status == 1) {
            var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
            var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            
        }
    }
}

draw()

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var scoreInfo = new DrawScore(ctx, score)
    var lifesInfo = new DrawLifes(ctx, canvas, lives)
    var ball = new DrawBall(ctx, x, y, ballRadius, "blue")
    var paddle = new DrawPaddle(ctx, canvas, paddleX, paddleWidth, paddleHeight, "red")
    var blocks = new DrawBricks(ctx, bricks,brickRowCount,brickColumnCount,brickWidth,brickHeight,brickPadding,brickOffsetTop,brickOffsetLeft, "red")
    scoreInfo.printScore()
    lifesInfo.printLifes()
    paddle.printPaddle()
    ball.printBall()
    blocks.printBricks()

    
    if (y + dy < ballRadius) {
        dy = -dy;
        // collideSound.play();
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
            // collideSound.play();
        }
        else {
            lives--;
            if (!lives) {
                alert("GAME OVER");
                document.location.reload();
            }
            else {
                x = canvas.width / 2;
                y = canvas.height - 30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width - paddleWidth) / 2;
            }
        }
    }

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        // collideSound.play();
        dx = -dx;
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 5;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 5;
    }

    x += dx;
    y += dy;

    if(gameStatus) requestAnimationFrame(draw);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var rightPressed = false;
var leftPressed = false;
var pausePressed = false;

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    } else if(e.keyCode == 80 && gameStatus == 1){
        pausePressed = true;
        gameStatus = 0;
        // pausedGame.style="display: block;"
        canvas.style="display: none;"
    }else if(e.keyCode == 80 && gameStatus == 0){
        pausePressed = false;
        gameStatus = 1;
        canvas.style="display: block;"
        // pausedGame.style="display: none;"
        draw()
    }

}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

